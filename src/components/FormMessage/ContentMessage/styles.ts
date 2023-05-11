import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import tw from "twin.macro";

export const BoxText = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMe",
})<{ isMe?: boolean }>`
  ${tw`w-fit p-2 rounded-lg  text-dark-400 dark:text-light-400 max-w-[300px]`}
  ${(prop) =>
    prop.isMe
      ? tw`bg-sky-200 dark:bg-sky-300`
      : tw`bg-pink-200 dark:bg-pink-300`}
`;

export const TextMessage = styled(Typography)`
  ${tw`w-auto break-words`}
`;

export const TextTime = styled(Typography)`
  ${tw`text-xs text-dark-400 dark:text-light-400`}
`;
