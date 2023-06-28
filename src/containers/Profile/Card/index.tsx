import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface IPropsCardWrapper {
  title?: string;
  avatar?: React.ReactNode;
  subHeader?: string;
  children: React.ReactNode;
}

interface IPropsMenu {
  handleClose: () => void;
  open: boolean;
  anchorEl: HTMLElement | null;
}

function DropDownOption({ handleClose, open, anchorEl }: IPropsMenu) {
  const handleClickItem = () => {};

  return (
    <Menu
      open={open}
      onClose={handleClose}
      anchorEl={anchorEl}
      transformOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      sx={{
        ".MuiMenu-paper": {
          width: "200px",
        },
      }}
    >
      <MenuItem onClick={handleClickItem}>
        <Typography>Profile</Typography>
      </MenuItem>
    </Menu>
  );
}

function CardWrapper({
  title = "",
  avatar = null,
  subHeader = "",
  children,
}: IPropsCardWrapper) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Card
      sx={{
        borderRadius: "8px",
        boxShadow:
          "0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      }}
    >
      <CardHeader
        avatar={avatar}
        title={title}
        subheader={subHeader}
        action={
          <>
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreHorizIcon />
            </IconButton>
            <DropDownOption
              open={open}
              anchorEl={anchorEl}
              handleClose={handleClose}
            />
          </>
        }
        sx={{
          "& .MuiCardHeader-title": {
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "16px",
            color: "#3E3F5E",
          },
          "& .MuiCardHeader-subheader": {
            fontSize: "12px",
            fontWeight: "500",
            lineHeight: "16px",
            color: "#3E3F5E",
          },
        }}
      />
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default CardWrapper;
