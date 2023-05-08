import {
  Avatar,
  Box,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { bindMenu } from "material-ui-popup-state";
import { type PopupState } from "material-ui-popup-state/hooks";

import Menu from "@/components/Menu";

interface IProps {
  popupState: PopupState;
}

dayjs.extend(relativeTime);

const MockAPI = Array(10).fill({
  image: "https://material-ui.com/static/images/avatar/1.jpg",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nam. Ipsum, illum esse? Quasi facere aspernatur est voluptatem id esse, vitae unde eligendi illo, quae aliquam dolores. Sequi, nam commodi!",
  time: dayjs("May 8, 2023 13:30:00").fromNow(),
});

function ListNotification(props: IProps) {
  const { popupState } = props;
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
      sx={{
        "& .MuiPaper-root": {
          maxWidth: 500,
        },
      }}
    >
      {MockAPI.map((item, index) => (
        <Box key={item.image}>
          <ListItem divider={index < MockAPI.length - 1} className="flex gap-2">
            <ListItemIcon>
              <Avatar alt={item.text} src={item.image} />
            </ListItemIcon>
            <Stack>
              <ListItemText className="whitespace-break-spaces line-clamp-2">
                {item.text}
              </ListItemText>
              <Typography>{item.time}</Typography>
            </Stack>
          </ListItem>
        </Box>
      ))}
    </Menu>
  );
}

export default ListNotification;
