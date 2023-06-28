import { Box } from "@mui/material";

import Input from "@/components/FormMessage/Input";
import ContentMessage from "@/containers/MessagePage/Chat/ContentMessage";
import Info from "@/containers/MessagePage/Chat/Info";

function Chat() {
  return (
    <Box className="col-span-8 xl:col-span-10 flex flex-col h-screen fit-content  ">
      <Info />
      <ContentMessage />
      <Box className="py-4  border-0 border-t-2  border-solid border-gray-400">
        <Input />
      </Box>
    </Box>
  );
}

export default Chat;
