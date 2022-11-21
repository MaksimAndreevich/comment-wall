import axios from 'axios';

export const doPostRequest = async (url: string, body: any) => {
  const res = await axios.post(url, body, {
    headers: { 'Access-Control-Allow-Origin': '*' },
  });
  return res;
};

export const doGetRequest = async (url: string) => {
  const res = await axios.get(url, {
    headers: { 'Access-Control-Allow-Origin': '*' },
  });
  return res;
};

export const scrollToTop = (parrentElement?: HTMLElement) => {
  const boxMessages = parrentElement || document.getElementById('box_messages');

  if (boxMessages && boxMessages.firstElementChild) {
    boxMessages.firstElementChild.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  }
};
