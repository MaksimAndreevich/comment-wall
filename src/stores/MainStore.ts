import { IMainStore, IMainStoreService, IUser, IUserPost } from "../interfaces";
import * as mobx from "mobx";
import moment from "moment";
import { MainStoreService } from "../srvices/mainStore.service";
import axios from "axios";
import { log } from "console";

export class MainStore implements IMainStore {
  private mainStoreService: IMainStoreService;

  user: IUser = {
    id: 0,
    name: "",
    avatar: "",
  };

  wallMessages: IUserPost[] = [
    {
      id: 0,
      replyTo: 1,
      author: "Alexandr Ivanov",
      avatar: "/static/avatars/0158.png",
      timestamp: moment().valueOf(),
      message: "Я оставил тут комментарий",
    },
    {
      id: 1,
      replyTo: 1,
      author: "Alexandr Ivanov",
      avatar: "/static/avatars/5903.png",
      timestamp: moment().valueOf(),
      message:
        "comment: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, blanditiis dolore. Neque necessitatibus omnis voluptatibus quo ratione fuga, possimus consectetur eos harum consequuntur reiciendis, laboriosam cumque aut aliquam perspiciatis! Suscipit.,",
    },
    {
      id: 2,
      replyTo: 1,
      author: "Alexandr Ivanov",
      avatar: "/static/avatars/5833.png",
      timestamp: moment().valueOf(),
      message:
        "Lore Я оставил тут комментарий Я оставил тут комментарийЯ оставил тут комментарийЯ оставил тут комментарийЯ оставил тут комментарийЯ оставил тут комментарий",
    },
  ];

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
  async init() {}

  sendMessage(msg: string) {
    const newMessages = {
      id: this.user.id,
      replyTo: null,
      author: this.user.name,
      avatar: "/static/avatars/0158.png",
      timestamp: moment().valueOf(),
      message: msg,
    };

    this.wallMessages.unshift(newMessages);

    // this.mainStoreService.postMessage({
    //   id: this.user.id,
    //   author: this.user.name,
    //   message: msg,
    // });
  }
}
