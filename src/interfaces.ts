import { AxiosResponse } from "axios";

export interface IUser {
  id: string;
  name: string;
  surname: string;
  image: string;
}

export interface IUserMessage {
  authorId: string;
  authorName?: string;
  authorSurname?: string;
  avatar?: string;
  messageId?: number;
  timestamp: number;
  message: string;
  replyTo: number | null;
}

export interface IMainStore {
  wallMessages: IUserMessage[];

  init: () => void;
  getFullName: () => string;
}

export interface IMainStoreService {
  getUsers: () => Promise<IGetResponseUsers>;
  getMe: () => Promise<IGetResponseMe>;
  getMessages: () => Promise<IGetResponseMessage>;
  postMessage: (body: IPostBody) => Promise<AxiosResponse<any, any>>;
}

export interface IGetResponseMe {
  me: { id: string };
}

export interface IGetResponseUsers {
  users: IUser[];
}

export interface IGetResponseMessage {
  messages: IGetResponseMessage[];
}

export interface IGetResponseMessage {
  author: string;
  id: number;
  message: string;
  replyTo: number;
  timestamp: number;
}

export interface IPostBody {
  author: string;
  message: string;
}
