import { AxiosResponse } from "axios";

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

export interface IMainStoreService {
  getUsers: () => Promise<AxiosResponse<any, any>>;
  getMe: () => Promise<AxiosResponse<any, any>>;
  getMessages: () => Promise<AxiosResponse<any, any>>;
  postMessage: (body: IPostBody) => Promise<AxiosResponse<any, any>>;
}

export interface IPostBody {
  id: number;
  author: string;
  message: string;
}
