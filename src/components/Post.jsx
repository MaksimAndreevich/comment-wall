import { IUserPost } from "../types";
import { Box, Paper, Avatar, Typography } from "@mui/material";
import moment from "moment";

const Post = ({ author, date, comment, avatar }: IUserPost) => {
  return (
    <Paper elevation={3}>
      <Box sx={{ display: "flex" }}>
        <Avatar alt={author} src={avatar} sx={{ margin: 1 }} />
        <Box sx={{ margin: 1 }}>
          <Typography>{author}</Typography>
          <Typography>
            {moment(date).format("MMMM Do YYYY, H:mm:ss")}
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ margin: 1 }}>{comment}</Typography>
    </Paper>
  );
};

export default Post;
