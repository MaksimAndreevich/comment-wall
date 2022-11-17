import { Box, TextField, Avatar, IconButton, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useStore } from "../stores";
import { useState } from "react";

const SubmitPostBox = () => {
  const store = useStore("mainStore");
  const [message, setMessage] = useState("");

  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (!message) return;
    store.sendMessage(message.trim());
    setMessage("");
  };

  return (
    <Paper
      elevation={3}
      sx={{ display: "flex" }}
      component={"form"}
      onSubmit={handleSubmit}
    >
      <Avatar
        alt="Remy Sharp"
        src="/static/avatars/112.png"
        sx={{ margin: 1 }}
      />
      <TextField
        value={message}
        onChange={handleChangeMessage}
        onKeyDown={(e) => {
          if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
            handleSubmit();
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
      <Box sx={{ display: "flex", alignItems: "end", margin: 1 }}>
        <IconButton aria-label="send post" onClick={handleSubmit}>
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default SubmitPostBox;
