import Search from "@/components/Header/Search";

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
