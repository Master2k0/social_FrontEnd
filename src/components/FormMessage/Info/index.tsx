import CloseIcon from "@mui/icons-material/Close";
import { Avatar, IconButton, Stack, Typography } from "@mui/material";

interface IProps {
  setOpenMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

function Info(props: IProps) {
  const { setOpenMessage } = props;
  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        margin={2}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
          <Stack>
            <Typography>Name user</Typography>
            <Typography>Time</Typography>
          </Stack>
        </Stack>
        <IconButton
          onClick={() => {
            setOpenMessage(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default Info;
