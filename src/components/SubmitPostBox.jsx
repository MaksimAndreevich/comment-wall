import { Box, TextField, Avatar, IconButton, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const SubmitPostBox = () => {
  return (
    <Paper elevation={3} sx={{ display: "flex" }}>
      <Avatar
        alt="Remy Sharp"
        src="/static/avatars/112.png"
        sx={{ margin: 1 }}
      />
      <TextField
        id="input-post"
        label="Что у Вас нового?"
        variant="standard"
        fullWidth
        multiline
        sx={{ margin: 1 }}
      />
      <Box sx={{ display: "flex", alignItems: "end", margin: 1 }}>
        <IconButton aria-label="send post">
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default SubmitPostBox;
