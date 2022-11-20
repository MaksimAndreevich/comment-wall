import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useStore } from '../stores';

interface ReplyToProps {
  replyTo: number;
}

const ReplyTo = ({ replyTo }: ReplyToProps) => {
  const store = useStore('mainStore');
  const replyMessage = store.findMessage(replyTo);

  useEffect(() => {}, []);

  return (
    <>
      {replyMessage && (
        <Typography
          sx={{
            fontStyle: 'italic',
            fontSize: 12,
          }}
        >
          Ответил на: {replyMessage.message}
        </Typography>
      )}
    </>
  );
};

export default ReplyTo;
