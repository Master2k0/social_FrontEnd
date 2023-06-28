import { Box } from "@mui/material";
import { useState } from "react";

import FilterBar from "@/containers/Profile/Friends/FilterBar";
import FriendCard, {
  type IFriendInfo,
} from "@/containers/Profile/Friends/FriendCard";

const listFriend = Array<IFriendInfo>(10).fill({
  name: "unknown",
  avatar: "https://picsum.photos/200/300",
  cover: "https://odindesignthemes.com/vikinger/img/cover/04.jpg",
});

function Friends() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");

  return (
    <Box className="flex flex-col gap-4">
      <FilterBar viewType={viewType} setViewType={setViewType} />
      <Box
        className={`
        ${
          viewType === "grid"
            ? "grid grid-cols-3 gap-4"
            : "grid grid-cols-1 gap-4 2xl:grid-cols-2"
        }
      `}
      >
        {listFriend.map((friend, index) => (
          <FriendCard key={index} type={viewType} info={friend} />
        ))}
      </Box>
    </Box>
  );
}

export default Friends;
