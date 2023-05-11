import { Box, Button } from "@mui/material";

import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";
import SwitchTheme from "@/components/SwitchTheme";
import { CustomizedSlider } from "@/components/Test";
import IconAvatar from "@/icons/Avatar";

export default function HomeContainer() {
  // const { logOut } = useAuth();

  return (
    // <div>
    //   <div>
    //     <h1>Home</h1>
    //     <Link href={PRIVATE_ROUTE.PROFILE}>Profile</Link>
    //
    //   </div>
    // </div>
    <Box className="bg-light-200 dark:bg-darkDark-200 min-h-[100vh]">
      <Header />
      <div className="w-40 h-40">
        <IconAvatar />
      </div>
      <SwitchTheme />
      <Button>Logout</Button>
      <CustomizedSlider />

      <MenuBar />

      {/* <Button
        onClick={async () => {
          await logOut();
        }}
      >
        Logout
      </Button> */}
    </Box>
  );
}
