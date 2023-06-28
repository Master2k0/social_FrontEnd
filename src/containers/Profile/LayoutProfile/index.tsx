import { Avatar, Box, Typography } from "@mui/material";

import Layout from "@/components/Layout";
import Navbar from "@/containers/Profile/Navbar";

interface IPropsLayoutProfile {
  children: React.ReactNode;
}
const profileUser = {
  name: "Unknown",
  avatar: "https://picsum.photos/200/300",
  background: "https://odindesignthemes.com/vikinger/img/cover/01.jpg",
  description: "Unknown",
};

function LayoutProfile({ children }: IPropsLayoutProfile) {
  return (
    <Layout>
      <Box className="flex flex-col gap-4 mt-4 ">
        <Box className="rounded-md relative bg-white shadow-lg ">
          <Box className="relative h-fit ">
            <img
              src="https://odindesignthemes.com/vikinger/img/cover/01.jpg"
              alt="background"
              className="bg-center bg-cover h-[300px] w-full object-cover object-center rounded-t-md"
            />
            <Avatar
              alt={profileUser.name}
              src={profileUser.avatar}
              sx={{ width: 200, height: 200 }}
              className="absolute z-10 left-1/2 transform -translate-x-1/2 -bottom-[30%]"
            />
          </Box>
          <Box className="pt-[100px] flex flex-col items-center">
            <Typography>{profileUser.name}</Typography>
          </Box>
        </Box>
        <Navbar />
        {children}
      </Box>
    </Layout>
  );
}

export default LayoutProfile;
