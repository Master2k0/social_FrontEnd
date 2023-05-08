import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
import { bindTrigger } from "material-ui-popup-state";
import { usePopupState } from "material-ui-popup-state/hooks";

import DropDown from "@/containers/Home/Header/Right/DropDown";
import ListNotification from "@/containers/Home/Header/Right/ListNotification";

export default function Right() {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "menu-user",
  });
  const popupStateNotification = usePopupState({
    variant: "popover",
    popupId: "menu-notification",
  });
  return (
    <Box className="center-flex gap-5">
      <IconButton
        {...bindTrigger(popupStateNotification)}
        className="hover:bg-inherit"
      >
        <Box className="bg-gray-50 rounded-full w-10 h-10 center-flex hover:bg-gray-100">
          <Badge color="secondary" badgeContent={10} max={9}>
            <NotificationsNoneIcon color="inherit" />
          </Badge>
        </Box>
      </IconButton>
      <ListNotification popupState={popupStateNotification} />

      <IconButton {...bindTrigger(popupState)} className="hover:bg-inherit">
        <Avatar
          alt="Name user"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
      </IconButton>
      <DropDown popupState={popupState} />
    </Box>
  );
}
