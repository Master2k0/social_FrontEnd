import Link from "next/link";

import { Button } from "@/components/Button";
import PrivateRoute from "@/components/PrivateRoute";
import SwitchTheme from "@/components/SwitchTheme";
import useAuth from "@/hooks/useAuth";
import { PRIVATE_ROUTE } from "@/router";

function Home() {
  const { logOut } = useAuth();
  return (
    <div>
      <h1>Home</h1>
      <Link href={PRIVATE_ROUTE.PROFILE}>Profile</Link>
      <SwitchTheme />
      <Button
        onClick={async () => {
          await logOut();
        }}
      >
        Logout
      </Button>
    </div>
  );
}

export default PrivateRoute(<Home />);
