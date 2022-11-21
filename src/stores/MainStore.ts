import { IMainStore, IMainStoreService, IUser, IUserMessage } from '../interfaces';
import * as mobx from 'mobx';
import moment from 'moment';
import { MainStoreService } from '../services/mainStore.service';

export class MainStore implements IMainStore {
  private mainStoreService: IMainStoreService;

  user: IUser = {
    id: '',
    name: '',
    surname: '',
    image: '',
    replyPost: null,
  };

  users: IUser[] = [];

  wallMessages: IUserMessage[] = [];

  constructor() {
    this.mainStoreService = new MainStoreService();
    mobx.makeAutoObservable(this);
  }

  @mobx.action
  async init() {
    const { me } = await this.mainStoreService.getMe();
    const { messages } = await this.mainStoreService.getMessages();
    const { users } = await this.mainStoreService.getUsers();

    users.forEach(({ id, name, surname, image }) => {
      this.users.push({
        id: id,
        image: image,
        name: this.decoding(name),
        surname: this.decoding(surname),
        replyPost: null,
      });
    });

    const findMe = this.findAuthor(me.id);
    if (findMe) {
      mobx.runInAction(() => {
        this.user = findMe;
      });
    }

    messages.forEach(({ message, author, id, replyTo, timestamp }) => {
      const creator = this.findAuthor(author);
      if (!creator) return;

      mobx.runInAction(() => {
        this.wallMessages.unshift({
          messageId: id,
          authorId: author,
          authorName: creator?.name,
          authorSurname: creator?.surname,
          replyTo: replyTo,
          message: this.decoding(message),
          timestamp: timestamp,
          image: creator?.image,
          like: false,
        });
      });
    });
  }

  @mobx.action
  sendMessage(msg: string) {
    const newMessages = {
      authorId: this.user.id,
      messageId: this.wallMessages.length,
      replyTo: this.user.replyPost,
      authorName: this.user.name,
      authorSurname: this.user.surname,
      image: this.user.image,
      timestamp: moment().valueOf(),
      message: msg,
      like: false,
    };

    this.wallMessages.unshift(newMessages);

    this.mainStoreService.postMessage({
      author: this.user.id,
      message: msg,
      replyTo: this.user.replyPost,
    });

    mobx.runInAction(() => {
      this.clearReplyTo();
    });
  }

  decoding(str: string) {
    const result = decodeURIComponent(str);
    return result;
  }

  findAuthor(authorId: string) {
    const author = this.users.find((user) => user.id === authorId);
    return author;
  }

  findMessage(msgId: number) {
    const message = this.wallMessages.find((msg) => msgId === msg.messageId);
    return message;
  }

  getFullName() {
    return `${this.user.name} ${this.user.surname}`;
  }

  setReplyPost(msgId: number) {
    const replyMessage = this.findMessage(msgId);
    let message = replyMessage?.message;
    if (message && message?.length > 50) {
      message = message.substring(0, 100) + '...';
    }
    mobx.runInAction(() => {
      this.user.replyPost = msgId;
      this.user.replyForMessage = message;
    });
  }

  clearReplyTo() {
    mobx.runInAction(() => {
      this.user.replyPost = null;
      this.user.replyForMessage = '';
    });
  }

  toggleLikeMessage(messageId: number) {
    const message = this.findMessage(messageId);
    if (message) {
      mobx.runInAction(() => {
        message.like = !message.like;
      });
    }
  }
}
