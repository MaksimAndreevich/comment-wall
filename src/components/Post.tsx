import { Box, Paper, Avatar, Typography } from "@mui/material";
import moment from "moment";
import { AVATAR_LIST } from "../utils/constants";

interface IPostProps {
  author: string;
  timestamp: number;
  message: string;
  avatar: string | null;
}

const Post = ({ author, timestamp, message, avatar }: IPostProps) => {
  return (
    <Paper elevation={3}>
      <Box sx={{ display: "flex" }}>
        <Avatar
          alt={author}
          src={avatar || AVATAR_LIST[0]}
          sx={{ margin: 1 }}
        />
        <Box sx={{ margin: 1 }}>
          <Typography>{author}</Typography>
          <Typography>
            {moment(timestamp).format("MMMM Do YYYY, H:mm:ss")}
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{ margin: 1, whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
      >
        {message}
      </Typography>
    </Paper>
  );
};

export default Post;
