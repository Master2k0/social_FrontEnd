import { Avatar, Box, Typography } from "@mui/material";

export interface IFriendField {
  name: string;
  avatar: string;
  isOnline: boolean;
  isTyping: boolean;
  lastMessage: string;
  lastMessageTime: string;
}

export interface IProps {
  friend: IFriendField;
}

function FriendField({ friend }: IProps) {
  const { name, avatar, isOnline, isTyping, lastMessage, lastMessageTime } =
    friend;
  return (
    <Box className="flex gap-5 items-center">
      <Avatar alt={name} src={avatar} />
      <Box className="flex-auto">
        <Typography>{name}</Typography>
        {isTyping ? (
          <Typography>typing...</Typography>
        ) : (
          <Box className="flex gap-1 items-center w-full">
            <Typography className="text-gray-500 flex-auto w-[50px] md:w-[90px] truncate ">
              {lastMessage}
            </Typography>
            <Typography className="text-gray-700">{lastMessageTime}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default FriendField;
