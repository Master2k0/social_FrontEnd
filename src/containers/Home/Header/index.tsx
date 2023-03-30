import Search from "@/containers/Home/Header/Search";

import Wrapper from "./styles";

export default function Header() {
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Left />
        <Search />
        <Wrapper.Right />
      </Wrapper.Container>
    </Wrapper>
  );
}
