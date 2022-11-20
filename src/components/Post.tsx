import { Box, Paper, Avatar, Typography } from "@mui/material";
import moment from "moment";
import { AVATAR_LIST } from "../utils/constants";
import ActionButtons from "./ActionButtons";
import ReplyTo from "./ReplyTo";

interface IPostProps {
  author: string;
  timestamp: number;
  message: string;
  avatar: string | null;
  replyTo: number;
}

const Post = ({ author, timestamp, message, avatar, replyTo }: IPostProps) => {
  return (
    <Paper elevation={3}>
      <Box sx={{ display: "flex" }}>
        <Avatar
          alt={author}
          src={avatar || AVATAR_LIST[0]}
          sx={{ margin: 1 }}
        />
        <Box sx={{ margin: 1 }}>
          <Typography sx={{ fontWeight: "bold" }}>{author}</Typography>
          <Typography sx={{ fontSize: 12 }}>
            {moment(timestamp).format("MMMM Do YYYY, H:mm:ss")}
          </Typography>
          {replyTo ? <ReplyTo replyTo={replyTo} /> : null}
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", margin: 1 }}>
        <Typography
          sx={{ margin: 1, whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
        >
          {message}
        </Typography>
        <ActionButtons />
      </Box>
    </Paper>
  );
};

export default Post;
