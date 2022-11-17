import { IMainStoreService, IPostBody } from "../interfaces";
import { REQUESTS } from "../utils/constants";
import { doGetRequest, doPostRequest } from "../utils/helpers";

export class MainStoreService implements IMainStoreService {
  async getUsers() {
    const result = await doGetRequest(REQUESTS.GET_USERS);
    return result.data.answer;
  }

  async getMe() {
    const result = await doGetRequest(REQUESTS.GET_ME);
    return result.data.answer;
  }

  async getMessages() {
    const result = await doGetRequest(REQUESTS.GET_MESSAGES);
    return result.data.answer;
  }

  async postMessage(body: IPostBody) {
    const result = await doPostRequest(REQUESTS.POST_MESSAGE, body);
    return result.data.answer;
  }
}
