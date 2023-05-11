/* eslint-disable react/no-array-index-key */
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Avatar,
  Badge,
  Collapse,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";

import { Container, IconButton } from "@/components/MenuBar/styles";

interface IProps {
  setOpenMessage: React.Dispatch<React.SetStateAction<boolean>>;
}
function Message(props: IProps) {
  const { setOpenMessage } = props;
  const [listMessage, setListMessage] = useState(
    Array(2).fill({
      name: "Name user",
      avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    })
  );
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    expand
      ? setListMessage(
          Array(10).fill({
            name: "Name user",
            avatar: "https://material-ui.com/static/images/avatar/1.jpg",
          })
        )
      : setListMessage(
          Array(2).fill({
            name: "Name user",
            avatar: "https://material-ui.com/static/images/avatar/1.jpg",
          })
        );
  }, [expand]);

  const handleExpand = () => {
    setExpand(!expand);
  };

  const handleOpenFormMessage = () => {
    setOpenMessage(true);
  };
  return (
    <Container>
      <Typography>Message</Typography>
      <List className="max-h-[240px] overflow-auto no-scrollbar transition-all ease-in-out duration-300 relative">
        <TransitionGroup className="flex flex-col items-center justify-between  ">
          {listMessage.map((item, index) => (
            <Collapse key={index}>
              <ListItem
                className="py-3 cursor-pointer"
                onClick={handleOpenFormMessage}
              >
                <Badge badgeContent={10} color="secondary">
                  <Avatar alt={item.name} src={item.avatar} />
                </Badge>
              </ListItem>
            </Collapse>
          ))}
        </TransitionGroup>
      </List>

      <IconButton onClick={handleExpand}>
        <KeyboardArrowDownIcon />
      </IconButton>
      <IconButton>
        <Typography>All</Typography>
      </IconButton>
    </Container>
  );
}

export default Message;
