import { Box, Divider } from "@mui/material";

import ContentMessage from "@/components/FormMessage/ContentMessage";
import Info from "@/components/FormMessage/Info";
import Input from "@/components/FormMessage/Input";

interface IProps {
  setOpenMessage: React.Dispatch<React.SetStateAction<boolean>>;
}
function FormMessage(props: IProps) {
  const { setOpenMessage } = props;
  return (
    <Box className="w-full h-full flex flex-col">
      <Info setOpenMessage={setOpenMessage} />
      <Divider />
      <ContentMessage />
      <Input />
    </Box>
  );
}
export default FormMessage;
