import styled from "@emotion/styled";
import { IconButton as IconButtonDefault, Stack } from "@mui/material";
import tw from "twin.macro";

export const Wrapper = styled(Stack)`
  ${tw`fixed left-5 top-[50%] -translate-y-1/2 z-10   `}
  ${tw`p-2.5 rounded-lg`}
`;

export const Above = styled(Stack)`
  ${tw`dark:bg-darkDark-900/5 bg-light-900/5`}
  ${tw`shadow-[-1px 1px 10px] shadow-light-900/10 dark:shadow-darkDark-900/10`}
  ${tw`backdrop-blur-sm  max-w-fit `}
  ${tw`p-2.5 rounded-lg`}
`;

export const Under = styled("div")<{ isShow?: boolean }>`
  ${tw`dark:bg-darkDark-900/5 bg-light-900/5`}
  ${tw`shadow-[-1px 1px 10px] shadow-light-900/10 dark:shadow-darkDark-900/10`}
  ${tw`backdrop-blur-sm transition-all ease-in-out duration-300 `}
  ${(props) =>
    props.isShow
      ? tw`max-w-[400px] max-h-[500px] mt-10`
      : tw`max-w-0 max-h-0 overflow-hidden`}
`;

export const Container = styled(Stack)`
  ${tw`flex items-center justify-between`}
`;

export const Test = styled("div")``;

export const IconButton = styled(IconButtonDefault, {
  shouldForwardProp: (prop) => prop !== "square" && prop !== "isNotHover",
})<{
  square?: boolean;
  isNotHover?: boolean;
}>`
  ${tw`dark:text-light-400 text-dark-400`}
  ${tw`ease-in-out duration-300 transition-all`}
  ${(props) => (props.square ? tw`rounded-lg` : tw`rounded-full`)};
  & .MuiTouchRipple-root .MuiTouchRipple-child {
    ${(props) => (props.square ? tw`rounded-lg` : tw`rounded-full`)};
  }
  ${(props) => props.isNotHover && tw`hover:bg-transparent hover:scale-125`}
`;
