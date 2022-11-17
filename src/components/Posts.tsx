import { Box } from "@mui/material";
import { IUserPost } from "../interfaces";
import Post from "./Post";
import moment from "moment";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores";

const postsDataExample: Array<IUserPost> = [
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

const Posts = observer(() => {
  const store = useStore("mainStore");

  return (
    <Box sx={{ marginTop: 1 }}>
      {store.wallMessages.map(({ author, timestamp, message, avatar }, i) => {
        return (
          <Post
            key={i}
            author={author}
            timestamp={timestamp}
            message={message}
            avatar={avatar}
          />
        );
      })}
    </Box>
  );
});

export default Posts;
