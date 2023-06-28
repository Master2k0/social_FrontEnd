import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { forwardRef } from "react";

import { Button } from "@/components/Button";

export interface IFriendInfo {
  name: string;
  avatar: string;
  cover: string;
}

export interface IPropsFriendCard {
  type: "grid" | "list";
  info: IFriendInfo;
}

const FriendCard = forwardRef<HTMLDivElement, IPropsFriendCard>(
  ({ type, info, ...props }, ref) => (
    <Box>
      {type === "grid" ? (
        <Card {...props} className="shadow-lg">
          <CardMedia
            sx={{
              height: "96px",
            }}
            image={info.cover}
          />
          <CardContent className="relative min-h-[100px] ">
            <Avatar
              alt={info.name}
              src={info.avatar}
              sx={{ width: 130, height: 130 }}
              className="absolute z-10 left-1/2 transform -translate-x-1/2 -top-[30%]"
            />
            <Box className="pt-[70px] flex flex-col gap-4">
              <Typography className="text-center">{info.name}</Typography>
              <Box className=" flex justify-between items-center gap-2">
                <Button
                  className="flex-auto py-2 bg-primary-400 text-white shadow-md shadow-primary-400"
                  variant="contained"
                >
                  Add Friend +
                </Button>
                <Button
                  className="flex-auto py-2 bg-secondary-400 text-white shadow-md shadow-secondary-400"
                  variant="contained"
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ) : (
        <Card
          {...props}
          className="shadow-lg  flex flex-row relative h-[120.5px] md:h-[100px]"
        >
          <Box className="relative">
            <img
              src={info.cover}
              alt={info.name}
              className="image object-cover w-[84px] h-[120.5px] md:h-[100px] "
            />
            <Avatar
              alt={info.name}
              src={info.avatar}
              sx={{ width: 50, height: 50 }}
              className="absolute z-10 top-1/2  -translate-y-1/2 transform  -right-[50px] -translate-x-[25px] "
            />
          </Box>
          <CardContent className="flex flex-col md:flex-row gap-4 pl-10 items-center justify-between w-full px-10 ">
            <Typography className="text-center">{info.name}</Typography>
            <Box className=" flex justify-between items-center gap-2">
              <Button
                className="flex-auto py-2 bg-primary-400 text-white shadow-md shadow-primary-400"
                variant="contained"
              >
                Add Friend +
              </Button>
              <Button
                className="flex-auto py-2 bg-secondary-400 text-white shadow-md shadow-secondary-400"
                variant="contained"
              >
                Send Message
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  )
);

export default FriendCard;
