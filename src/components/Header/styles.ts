import styled from "@emotion/styled";
import { Box } from "@mui/system";
import tw from "twin.macro";

import Left from "@/components/Header/Left";
import Right from "@/components/Header/Right";

import Search from "./Search";

const Wrapper = styled(Box)`
  ${tw`px-5 z-50 sticky max-h-20 h-20 top-0 left-0 right-0 w-auto bg-white dark:bg-darkDark-400`}
`;

const Container = styled(Box)`
  ${tw`flex items-center justify-between h-full w-full`}
`;
export default Object.assign(Wrapper, {
  Container,
  Left,
  Right,
  Search,
});
