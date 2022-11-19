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
    image: "/static/avatars/112.png",
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
      });
    });

    const findMe = this.findAuthor(me.id);
    if (findMe) {
      mobx.runInAction(() => {
        this.user = findMe;
        this.user.image = this.convertImagePath(this.user.image);
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
          avatar: this.convertImagePath(creator?.image),
        });
      });
    });
  }

  @mobx.action
  sendMessage(msg: string) {
    const newMessages = {
      authorId: this.user.id,
      replyTo: null,
      fullName: this.user.name,
      image: this.user.image,
      timestamp: moment().valueOf(),
      message: msg,
      avatar: this.user.image,
    };

    this.wallMessages.unshift(newMessages);

    this.mainStoreService.postMessage({
      author: this.user.id,
      message: msg,
    });
  }

  decoding(str: string) {
    const result = decodeURI(str);
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

  convertImagePath(path: string = "") {
    const arr = path.split("/");
    const fileName = arr[arr.length - 1];
    return `/static/avatars/${fileName}`;
  }

  getFullName() {
    return `${this.user.name} ${this.user.surname}`;
  }
}
