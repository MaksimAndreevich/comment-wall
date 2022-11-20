import { AxiosResponse } from 'axios';

export interface IUser {
  id: string;
  name: string;
  surname: string;
  image: string;
  replyPost: number | null;
  replyForMessage?: string;
}

export interface IUserMessage {
  authorId: string;
  authorName?: string;
  authorSurname?: string;
  avatar?: string;
  messageId: number;
  timestamp: number;
  message: string;
  replyTo: number | null;
  like: boolean;
}

export interface IMainStore {
  wallMessages: IUserMessage[];

  init: () => void;
  getFullName: () => string;
  findMessage: (msgId: number) => IUserMessage | undefined;
  setReplyPost: (msgId: number) => void;
  toggleLikeMessage: (messageId: number) => void;
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
  replyTo: number | null;
}
