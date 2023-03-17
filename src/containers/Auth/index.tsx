import Layout from "@/containers/Auth/Layout";

import { Background, BackgroundOverlay, Container } from "./styles";

function AuthContainer() {
  return (
    <Background>
      <BackgroundOverlay>
        <Container>
          <Layout />
        </Container>
      </BackgroundOverlay>
    </Background>
  );
}

export default AuthContainer;
