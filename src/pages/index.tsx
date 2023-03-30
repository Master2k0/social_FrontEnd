import PrivateRoute from "@/components/PrivateRoute";
import HomeContainer from "@/containers/Home";

function Home() {
  return <HomeContainer />;
}

export default PrivateRoute(<Home />);
