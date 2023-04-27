import { styled } from "@mui/system";
import { MaterialDesignContent } from "notistack";

import { readexPro } from "@/constants/theme";
import BORDER_RADIUS from "@/types/Enum/borderRadius";

const ToastCustom = styled(MaterialDesignContent)(({ theme }) => ({
  "&.notistack-MuiContent-success": {
    backgroundColor: "rgba(0,0,0,0)",
    border: "1px solid #43a047",
    borderRadius: BORDER_RADIUS.MD,
    color: "#43a047",
    fontFamily: readexPro.style.fontFamily,
  },
  "&.notistack-MuiContent-error": {
    backgroundColor: "rgba(0,0,0,0)",
    border: "1px solid #D32F4B",
    borderRadius: BORDER_RADIUS.MD,
    color: "#D32F4B",
    fontFamily: readexPro.style.fontFamily,
  },
  "&.notistack-MuiContent-warning": {
    backgroundColor: "rgba(0,0,0,0)",
    border: "1px solid #ff9800",
    borderRadius: BORDER_RADIUS.MD,
    color: "#ff9800",
    fontFamily: readexPro.style.fontFamily,
  },
  "&.notistack-MuiContent-info": {
    backgroundColor: "rgba(0,0,0,0)",
    border: "1px solid #2196f3",
    borderRadius: BORDER_RADIUS.MD,
    color: "#2196f3",
    fontFamily: readexPro.style.fontFamily,
  },
  "&.notistack-MuiContent-default": {
    backgroundColor: "rgba(0,0,0,0)",
    border: "1px solid #313131",
    borderRadius: BORDER_RADIUS.MD,
    color: "#313131",
    fontFamily: readexPro.style.fontFamily,
  },
}));

export default ToastCustom;
