import { TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/system";

import BORDER_RADIUS from "@/types/Enum/borderRadius";
import { ColorDark, ColorLight } from "@/types/Enum/color";

export const InputText = styled(TextField)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? grey[200] : theme.palette.common.black,

  "& .MuiOutlinedInput-root": {
    borderRadius: BORDER_RADIUS.LG,
    "&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline":
      {
        borderColor:
          theme.palette.mode === "dark" ? ColorDark.GRAY : ColorLight.GRAY,
      },
    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.error.main,
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.mode === "dark" ? ColorDark.GRAY : ColorLight.GRAY,
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: theme.palette.error.main,
  },
})) as typeof TextField;
