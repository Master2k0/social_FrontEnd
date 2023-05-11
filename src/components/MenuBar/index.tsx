import { Divider } from "@mui/material";
import { useState } from "react";

import FormMessage from "@/components/FormMessage";
import Menu from "@/components/MenuBar/Menu";
import Message from "@/components/MenuBar/Message";
import { Above, Under, Wrapper } from "@/components/MenuBar/styles";

function MenuBar() {
  const [openMessage, setOpenMessage] = useState(false); // Temporary for testing UI
  return (
    <Wrapper>
      <Above
        spacing={5}
        alignItems="center"
        justifyContent="center"
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Menu />
        <Message setOpenMessage={setOpenMessage} />
      </Above>
      <Under isShow={openMessage}>
        <FormMessage setOpenMessage={setOpenMessage} />
      </Under>
    </Wrapper>
  );
}
export default MenuBar;
