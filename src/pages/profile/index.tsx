import Link from "next/link";

import PrivateRoute from "@/components/PrivateRoute";
import { PRIVATE_ROUTE } from "@/router";

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <Link href={PRIVATE_ROUTE.HOME}>Home</Link>
    </div>
  );
}

export default PrivateRoute(<Profile />);
