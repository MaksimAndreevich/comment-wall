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
  image: string;
  messageId: number;
  timestamp: number;
  message: string;
  replyTo: number | null;
  like: boolean;
}

export interface IMainStore {
  wallMessages: IUserMessage[];

  /** Store initialization. Downloads data from the server: me, messages, users */
  init: () => void;

  /** Sends data to the server and to the beginning of the wallMessages array */
  sendMessage: (msg: string) => void;

  /** Decodes strings from the server  */
  decoding: (str: string) => string;

  /** Searches for the author among the list of users */
  findAuthor: (authorId: string) => IUser | undefined;

  /** Searches for a message by id among the list of all messages */
  findMessage: (msgId: number) => IUserMessage | undefined;

  /** Returns the full name of the user in one line */
  getFullName: () => string;

  /** Sets the ID of the message to which the sent message will refer */
  setReplyPost: (msgId: number) => void;

  /** Clears the ID of the message that the sent message will refer to */
  clearReplyTo: () => void;

  /** Toggles the like icon. Works only in the local store */
  toggleLikeMessage: (messageId: number) => void;
}

export interface IMainStoreService {
  /** Gets a list of users from the server */
  getUsers: () => Promise<IGetResponseUsers>;

  /** Gets information about yourself */
  getMe: () => Promise<IGetResponseMe>;

  /** Gets a list of messages from the server */
  getMessages: () => Promise<IGetResponseMessage>;

  /** Posts a new message to the server */
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
