import { Avatar, Badge, Box, ListItem } from "@mui/material";
import { useState } from "react";

import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

function ListFriend() {
  const [listFriend, setListFriend] = useState(
    Array(5).fill({
      name: "Name user",
      avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    })
  );

  const scrollRef = useHorizontalScroll();
  return (
    <Box
      ref={scrollRef}
      className="flex justify-start gap-2  overflow-x-auto no-scrollbar flex-initial py-2 px-4"
    >
      {listFriend.map((friend, index) => (
        <ListItem key={index} className="cursor-pointer p-1 w-fit">
          <Badge
            color="secondary"
            variant="dot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar alt={friend.name} src={friend.avatar} />
          </Badge>
        </ListItem>
      ))}
    </Box>
  );
}

export default ListFriend;
