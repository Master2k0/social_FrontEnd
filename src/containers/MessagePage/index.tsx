import { Box } from "@mui/material";

import Chat from "@/containers/MessagePage/Chat";
import LeftBar from "@/containers/MessagePage/LeftBar";

function MessagePage() {
  return (
    <Box className="grid grid-cols-12">
      <LeftBar />
      <Chat />
    </Box>
  );
}

export default MessagePage;
