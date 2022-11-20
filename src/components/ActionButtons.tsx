import { Stack, IconButton } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const ActionButtons = () => {
  const [like, setLike] = useState(false);

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ justifyContent: "flex-end", alignItems: "flex-end" }}
    >
      <IconButton aria-label="reply to">
        <ReplyIcon fontSize="small" />
      </IconButton>
      <IconButton
        aria-label="like"
        color="primary"
        onClick={() => {
          setLike(!like);
        }}
      >
        {!like ? (
          <FavoriteBorderIcon fontSize="small" />
        ) : (
          <FavoriteIcon fontSize="small" />
        )}
      </IconButton>
    </Stack>
  );
};

export default ActionButtons;
