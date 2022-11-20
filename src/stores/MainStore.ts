import {
  IMainStore,
  IMainStoreService,
  IUser,
  IUserMessage,
} from "../interfaces";
import * as mobx from "mobx";
import moment from "moment";
import { MainStoreService } from "../srvices/mainStore.service";

export class MainStore implements IMainStore {
  private mainStoreService: IMainStoreService;

  user: IUser = {
    id: "",
    name: "",
    surname: "",
    image: "",
    replyPost: null,
  };

  users: IUser[] = [];

  wallMessages: IUserMessage[] = [];

  constructor() {
    this.mainStoreService = new MainStoreService();
    mobx.makeAutoObservable(this);
  }

  @mobx.action
  hasName() {
    return !!this.user.name;
  }

  @mobx.action
  setUserName(fullName: string) {
    mobx.runInAction(() => {
      this.user.name = fullName;
    });
  }

  @mobx.action
  setUserAvatar(avatar: string) {
    mobx.runInAction(() => {
      this.user.image = avatar;
    });
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

      mobx.runInAction(() => {
        this.wallMessages.unshift({
          messageId: id,
          authorId: author,
          authorName: creator?.name,
          authorSurname: creator?.surname,
          replyTo: replyTo,
          message: this.decoding(message),
          timestamp: timestamp,
          avatar: creator?.image,
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
      avatar: this.user.image,
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

  findAuthor(authorId: string): IUser | undefined {
    let author;
    this.users.forEach(({ id }, i) => {
      if (id === authorId) {
        author = this.users[i];
      }
    });

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
      message = message.substring(0, 100) + "...";
    }
    mobx.runInAction(() => {
      this.user.replyPost = msgId;
      this.user.replyForMessage = message;
    });
  }

  clearReplyTo() {
    mobx.runInAction(() => {
      this.user.replyPost = null;
      this.user.replyForMessage = "";
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
