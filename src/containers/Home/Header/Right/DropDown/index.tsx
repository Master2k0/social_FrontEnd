import ContactPageIcon from "@mui/icons-material/ContactPage";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { ListItemText } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { bindMenu } from "material-ui-popup-state";
import { type PopupState } from "material-ui-popup-state/hooks";
import { useEffect, useState } from "react";

import Menu, { ListItemIcon } from "@/components/Menu";
import changeTheme from "@/utils/changeTheme";

interface IPropsDropDown {
  popupState: PopupState;
}

function DropDown(props: IPropsDropDown) {
  const { popupState } = props;
  const [theme, setTheme] = useState("");
  useEffect(() => {
    setTheme(localStorage.getItem("theme") ?? "light");
  }, []);
  return (
    <Menu
      {...bindMenu(popupState)}
      slotProps={{
        root: {},
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <MenuItem>
        <ListItemIcon>
          <ContactPageIcon />
        </ListItemIcon>
        <ListItemText>Trang cá nhân</ListItemText>
      </MenuItem>
      <MenuItem
        onClick={() => {
          changeTheme();
          setTheme(localStorage.getItem("theme") ?? "light");
        }}
      >
        <ListItemIcon>
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </ListItemIcon>
        <ListItemText>{theme === "light" ? "Tối" : "Sáng"}</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText>Cài đặt</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText>Đăng xuất</ListItemText>
      </MenuItem>
    </Menu>
  );
}

export default DropDown;
