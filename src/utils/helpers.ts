import axios from "axios";

export const doPostRequest = async (url: string, body: any) => {
  const res = await axios.post(url, body, {
    headers: {
      Authorization: body.author,
    },
  });
  return res;
};

export const doGetRequest = async (url: string) => {
  const res = await axios.get(url);
  return res;
};
