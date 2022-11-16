import { Box } from "@mui/material";
import { IUserPost } from "../types";
import Post from "./Post";
import moment from "moment";

const postsDataExample: Array<IUserPost> = [
  {
    author: "Alexandr Ivanov",
    avatar: "/static/avatars/0158.png",
    date: moment(),
    comment: "Я оставил тут комментарий",
  },
  {
    author: "Alexandr Ivanov",
    avatar: "/static/avatars/5903.png",
    date: moment(),
    comment:
      "comment: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, blanditiis dolore. Neque necessitatibus omnis voluptatibus quo ratione fuga, possimus consectetur eos harum consequuntur reiciendis, laboriosam cumque aut aliquam perspiciatis! Suscipit.,",
  },
  {
    author: "Alexandr Ivanov",
    avatar: "/static/avatars/5833.png",
    date: moment(),
    comment:
      "Lore Я оставил тут комментарий Я оставил тут комментарийЯ оставил тут комментарийЯ оставил тут комментарийЯ оставил тут комментарийЯ оставил тут комментарий",
  },
];

const Posts = () => {
  return (
    <Box sx={{ marginTop: 1 }}>
      {postsDataExample.map(({ author, date, comment, avatar }, i) => {
        return (
          <Post
            key={i}
            author={author}
            date={date}
            comment={comment}
            avatar={avatar}
          />
        );
      })}
    </Box>
  );
};

export default Posts;
