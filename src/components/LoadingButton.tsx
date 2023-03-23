import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/system";

import BORDER_RADIUS from "@/types/Enum/borderRadius";

export const LoadingButtonCustom = styled(LoadingButton)(({ theme }) => ({
  borderRadius: BORDER_RADIUS.LG,
})) as typeof LoadingButton;
