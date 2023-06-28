import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CollectionsIcon from "@mui/icons-material/Collections";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Box, Typography } from "@mui/material";
import Router, { useRouter } from "next/router";
import { useState } from "react";

const ItemNavbar = [
  {
    name: "About",
    icon: <AccountCircleIcon />,
    key: "about",
  },
  {
    name: "Timeline",
    icon: <TimelineIcon />,
    key: "timeline",
  },
  {
    name: "Friends",
    icon: <InsertEmoticonIcon />,
    key: "friends",
  },
  {
    name: "Groups",
    icon: <Diversity3Icon />,
    key: "groups",
  },
  {
    name: "Photos",
    icon: <CollectionsIcon />,
    key: "photos",
  },
  {
    name: "Videos",
    icon: <OndemandVideoIcon />,
    key: "videos",
  },
];

function Navbar() {
  const handleClick = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
    key: string
  ) => {
    e.preventDefault();

    Router.push({
      pathname: `/profile`,
      query: { page: key },
    });
  };

  const router = useRouter();
  return (
    <Box className="flex gap-2 justify-evenly items-center h-20 bg-white shadow-lg rounded-md overflow-hidden ">
      {ItemNavbar.map((item, index) => (
        <Box
          key={index}
          className={`relative flex flex-col flex-auto  items-center justify-center h-full box-border
         [&>.icon]:hover:invisible
         [&>.icon]:hover:opacity-0
         [&>.icon]:hover:translate-y-[-20px]
         [&>.navbar-text]:hover:visible
         [&>.navbar-text]:hover:opacity-100
         [&>.navbar-text]:hover:translate-y-0
          ${
            router.query.page === item.key
              ? "after:content-[''] after:absolute after:w-full after:h-[3px] after:left-0  after:bottom-0 after:bg-blue-300 "
              : `
                after:content-[''] after:absolute after:w-0 after:h-[3px] after:left-1/2 after:bottom-0 after:bg-blue-300 after:transition-all after:duration-200 after:ease-in-out
                hover:after:w-full hover:after:left-0
                `
          }           
          `}
          onClick={(e) => {
            handleClick(e, index, item.key);
          }}
        >
          <Box className="icon transition-all ease-in-out duration-200 visible">
            {item.icon}
          </Box>
          <Typography className="navbar-text transition-all ease-in-out duration-200 opacity-0 invisible absolute ">
            {item.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Navbar;
