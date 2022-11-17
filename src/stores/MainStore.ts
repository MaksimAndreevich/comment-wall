import { IMainStore, IUser, IUserPost } from "../interfaces";
import * as mobx from "mobx";
import moment from "moment";

export class MainStore implements IMainStore {
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
    mobx.makeAutoObservable(this);
  }

  init() {
    // get data from server
  }

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
  }
}
