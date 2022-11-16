import { Moment } from "moment";

export interface IUserPost {
  author: string;
  avatar: string;
  date: Moment;
  comment: string;
}
