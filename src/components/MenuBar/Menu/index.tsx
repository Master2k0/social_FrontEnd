import ComputerIcon from "@mui/icons-material/Computer";
import Groups3Icon from "@mui/icons-material/Groups3";
import HomeIcon from "@mui/icons-material/Home";
import { Typography } from "@mui/material";

import { Container, IconButton } from "@/components/MenuBar/styles";

function Menu() {
  return (
    <Container>
      <Typography>Menu</Typography>
      <IconButton square isNotHover>
        <HomeIcon className="w-10 h-10" />
      </IconButton>
      <IconButton square isNotHover>
        <ComputerIcon className="w-10 h-10" />
      </IconButton>
      <IconButton square isNotHover>
        <Groups3Icon className="w-10 h-10" />
      </IconButton>
    </Container>
  );
}

export default Menu;
