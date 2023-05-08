import styled from "@emotion/styled";
import { InputBase } from "@mui/material";
import tw from "twin.macro";

export const SearchContainer = styled("div")`
  ${tw`relative rounded-lg border-2 border-solid dark:border-light-400 2xl:w-[500px] xl:w-[400px] lg:w-[300px] md:w-[250px] md:block hidden`}
`;

export const Icon = styled("div")`
  ${tw`h-full absolute pointer-events-none flex items-center justify-center pl-1.5 dark:text-light-400 `}
`;

export const Input = styled(InputBase)`
  ${tw`w-full`}
  & .MuiInputBase-input {
    ${tw`p-2 pl-8 w-full text-dark-900 dark:text-light-400`}
  }
`;
