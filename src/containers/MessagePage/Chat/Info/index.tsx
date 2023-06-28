import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Avatar, Menu, MenuItem, Stack, Typography } from "@mui/material";
import Router from "next/router";
import { useState } from "react";

import { ListItemIcon } from "@/components/Menu";

interface IMenuUser {
  handleClose: () => void;
  open: boolean;
  anchorEl: HTMLElement | null;
}

function MenuUser({ handleClose, open, anchorEl }: IMenuUser) {
  const handleClickProfile = () => {
    handleClose();
    Router.push("/profile");
  };

  const handleClickFiles = () => {
    handleClose();
  };
  return (
    <Menu
      open={open}
      onClose={handleClose}
      anchorEl={anchorEl}
      transformOrigin={{
        horizontal: "left",
        vertical: "top",
      }}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      sx={{
        ".MuiMenu-paper": {
          width: "200px",
        },
      }}
    >
      <MenuItem onClick={handleClickProfile}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <Typography>Profile</Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <InsertDriveFileIcon />
        </ListItemIcon>
        <Typography>Files</Typography>
      </MenuItem>
    </Menu>
  );
}

function Info() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack className="mt-3 border-0 border-b-2 border-solid border-gray-400 table-caption">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        margin={2}
        onClick={handleClick}
        className="w-fit cursor-pointer"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
          <Stack>
            <Typography>Name user</Typography>
            <Typography>Time</Typography>
          </Stack>
        </Stack>
      </Stack>
      <MenuUser handleClose={handleClose} open={open} anchorEl={anchorEl} />
    </Stack>
  );
}

export default Info;
