import { Box, TextField } from "@mui/material";
import dayjs from "dayjs";

import ListFriend from "@/containers/MessagePage/LeftBar/ListFriend";
import FriendField, {
  type IFriendField,
} from "@/containers/MessagePage/LeftBar/ListFriend/FriendField";

const ArrFriend: IFriendField[] = Array(5).fill({
  name: "Tester",
  avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  isOnline: true,
  isTyping: false,
  lastMessage: "Something to do today",
  lastMessageTime: dayjs().format("HH:mm"),
});

function LeftBar() {
  return (
    <Box className="col-span-4 xl:col-span-2  h-screen flex flex-col gap-2 border-0 border-r-2  border-solid border-gray-400 ">
      <TextField color="secondary" className="pt-4 px-4" />
      <ListFriend />
      <Box className="flex flex-col gap-5 flex-auto overflow-y-auto scrollbarCustom px-4">
        {ArrFriend.map((friend, index) => (
          <FriendField friend={friend} key={index} />
        ))}
      </Box>
    </Box>
  );
}

export default LeftBar;
