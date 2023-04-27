import { Box, Button } from "@mui/material";

import SwitchTheme from "@/components/SwitchTheme";
import { CustomizedSlider } from "@/components/Test";
import Header from "@/containers/Home/Header";
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
    <Box>
      <Header />
      <div className="w-40 h-40">
        <IconAvatar />
      </div>
      <SwitchTheme />
      <Button>Logout</Button>
      <CustomizedSlider />
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
