import { Box } from "@mui/material";
import Post from "./Post";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores";

const Posts = observer(() => {
  const store = useStore("mainStore");

  return (
    <Box sx={{ marginTop: 1 }}>
      {store.wallMessages.map(
        ({ authorName, authorSurname, timestamp, message, avatar }, i) => {
          return (
            <Post
              key={i}
              author={
                authorName ? `${authorName} ${authorSurname}` : "Anonymous User"
              }
              timestamp={timestamp}
              message={message}
              avatar={avatar || null}
            />
          );
        }
      )}
    </Box>
  );
});

export default Posts;
