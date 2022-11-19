import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useStore } from "../stores";
import { observer } from "mobx-react-lite";

const avatarsList: string[] = [
  "/static/avatars/112.png",
  "/static/avatars/0158.png",
  "/static/avatars/231.png",
  "/static/avatars/488.png",
  "/static/avatars/5833.png",
  "/static/avatars/5903.png",
];

export const AvatarSelect = observer(() => {
  const store = useStore("mainStore");
  //TODO: e: type
  const handleChangeAvatar = (e: any) => {
    const { avatarPath } = e.currentTarget.dataset;
    store.setUserAvatar(avatarPath);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ padding: 1, alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Выбор аватара">
          <IconButton
            onClick={handleClick}
            size="large"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 56, height: 56 }} src={store.user.avatar} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {avatarsList.map((avatar, i) => {
          return (
            <MenuItem
              key={i}
              data-avatar-path={avatar}
              onClick={handleChangeAvatar}
            >
              <Avatar src={avatar} />
            </MenuItem>
          );
        })}
      </Menu>
    </React.Fragment>
  );
});

export default AvatarSelect;
