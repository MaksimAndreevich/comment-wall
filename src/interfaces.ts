export interface IUser {
  id: number;
  name: string;
  avatar: string;
}

export interface IUserPost {
  id: number;
  author: string;
  avatar: string;
  timestamp: number;
  message: string;
  replyTo: number | null;
}

export interface IMainStore {
  wallMessages: IUserPost[];

  init: () => void;
}
