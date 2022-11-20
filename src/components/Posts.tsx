import { Box, Fab } from '@mui/material';
import Post from './Post';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores';
import ScrollTop from './ScrollToTop';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useRef } from 'react';

const Posts = observer(() => {
  const store = useStore('mainStore');
  const ref = useRef<HTMLElement>();

  return (
    <>
      <Box ref={ref} sx={{ marginTop: 1, overflow: 'auto', padding: 1, flexGrow: 1 }}>
        {store.wallMessages.map(({ authorName, authorSurname, timestamp, message, avatar, replyTo, messageId, like }, i) => {
          return (
            <Post
              key={i}
              author={authorName ? `${authorName} ${authorSurname}` : 'Anonymous User'}
              timestamp={timestamp}
              message={message}
              messageId={messageId}
              avatar={avatar || null}
              replyTo={replyTo}
              like={like}
            />
          );
        })}
      </Box>

      <ScrollTop postsRef={ref}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
});

export default Posts;
