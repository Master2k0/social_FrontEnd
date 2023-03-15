import SwitchTheme from "@/components/SwitchTheme";
import SignIn from "@/containers/Auth/SignIn";
import SignUp from "@/containers/Auth/SignUp";

function AuthContainer() {
  return (
    <div>
      <SwitchTheme />
      {/* <SignUp /> */}
      <SignIn />
    </div>
  );
}

export default AuthContainer;
