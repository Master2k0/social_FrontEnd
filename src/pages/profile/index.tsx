import PrivateRoute from "@/components/PrivateRoute";
import ProfileContainer from "@/containers/Profile";

function Profile() {
  return <ProfileContainer />;
}

export default PrivateRoute(<Profile />);
