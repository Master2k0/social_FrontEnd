import { Box } from "@mui/material";
import { useState } from "react";

import FilterBar from "@/containers/Profile/Groups/FilterBar";
import GroupCard, {
  type IGroupInfo,
} from "@/containers/Profile/Groups/GroupCard";

const listGroups = Array<IGroupInfo>(10).fill({
  name: "unknown",
  avatar: "https://picsum.photos/200/300",
  cover: "https://odindesignthemes.com/vikinger/img/cover/04.jpg",
});

function GroupPage() {
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
        {listGroups.map((group, index) => (
          <GroupCard key={index} type={viewType} info={group} />
        ))}
      </Box>
    </Box>
  );
}

export default GroupPage;
