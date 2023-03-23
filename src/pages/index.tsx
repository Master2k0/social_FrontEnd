import Link from "next/link";

import PrivateRoute from "@/components/PrivateRoute";
import SwitchTheme from "@/components/SwitchTheme";
import { PRIVATE_ROUTE } from "@/router";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href={PRIVATE_ROUTE.PROFILE}>Profile</Link>
      <SwitchTheme />
    </div>
  );
}

export default PrivateRoute(<Home />);
