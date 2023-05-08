import styled from "@emotion/styled";
import {
  ListItemIcon as ListItemIconDefault,
  Menu as MenuDefault,
} from "@mui/material";
import tw from "twin.macro";

const Menu = styled(MenuDefault)`
  & .MuiPaper-root {
    ${tw`dark:bg-dark-400 dark:text-light-400 bg-light-400 text-dark-400 rounded-lg `}
  }
  & .MuiList-root {
    ${tw`p-0`}
  }
`;

export const ListItemIcon = styled(ListItemIconDefault)`
  ${tw`dark:text-light-400 text-dark-400`}
`;
export default Menu;
