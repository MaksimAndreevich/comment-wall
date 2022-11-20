import { Stack, IconButton } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useStore } from "../stores";

interface IActionButtonsProps {
  handleReply: () => void;
  messageId: number;
  like: boolean;
}

const ActionButtons = ({
  handleReply,
  messageId,
  like,
}: IActionButtonsProps) => {
  const store = useStore("mainStore");
  const handleLike = () => {
    store.toggleLikeMessage(messageId);
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ justifyContent: "flex-end", alignItems: "flex-end" }}
    >
      <IconButton aria-label="reply to" onClick={handleReply}>
        <ReplyIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="like" color="primary" onClick={handleLike}>
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
