import { Box, TextField, Avatar, IconButton, Paper, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useStore } from '../stores';
import { FormEvent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import CloseIcon from '@mui/icons-material/Close';

const SubmitPostBox = observer(() => {
  const store = useStore('mainStore');
  const [message, setMessage] = useState('');

  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>) => {
    if (!message) return;
    store.sendMessage(message.trim());
    setMessage('');
  };

  const handleClearReplyTo = () => {
    store.clearReplyTo();
  };

  return (
    <Paper elevation={3} sx={{ display: 'flex' }} component={'form'} onSubmit={handleSubmit}>
      <Avatar alt={store.getFullName()} src={store.user.image} sx={{ margin: 1 }} />
      <Box sx={{ width: '100%', margin: 1 }}>
        {store.user.replyPost !== null ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignContent: 'flex-start',
            }}
          >
            <Typography
              sx={{
                fontStyle: 'italic',
                fontSize: 12,
              }}
            >
              Ответ на сообщение: {store.user.replyForMessage}
            </Typography>
            <IconButton aria-label="remove reply to" onClick={handleClearReplyTo}>
              <CloseIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </Box>
        ) : null}
        <TextField
          value={message}
          onChange={handleChangeMessage}
          onKeyDown={(e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
              handleSubmit(e);
            }
          }}
          id="input-post"
          label="Что у Вас нового?"
          variant="standard"
          fullWidth
          multiline
          maxRows={8}
          sx={{ margin: 1 }}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'end', margin: 1 }}>
        <IconButton aria-label="send post" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSubmit(e)}>
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
});

export default SubmitPostBox;
