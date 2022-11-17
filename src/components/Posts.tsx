import { Box } from "@mui/material";
import Post from "./Post";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores";

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
