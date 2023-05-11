import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Input as InputMui } from "@mui/base";
import SendIcon from "@mui/icons-material/Send";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { Box, IconButton, Stack } from "@mui/material";
import { useRef, useState } from "react";

import useOnClickOutside from "@/hooks/useClickOutside";

function Input() {
  const refEmoji = useRef(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [input, setInput] = useState<string>("");
  const handleCloseEmoji = () => {
    setShowEmojis(false);
  };

  useOnClickOutside(refEmoji, handleCloseEmoji);

  const handleSelectEmoji = (icon: string) => {
    setInput(input + icon);
  };

  return (
    <Stack className="relative" direction="row" spacing={2} alignItems="center">
      <Box>
        {showEmojis && (
          <Box className="absolute bottom-full left-0" ref={refEmoji}>
            <Picker
              data={data}
              previewPosition="none"
              onEmojiSelect={(icon: any) => {
                handleSelectEmoji(icon.native);
              }}
            />
          </Box>
        )}
        <IconButton
          onClick={() => {
            setShowEmojis(!showEmojis);
          }}
        >
          <SentimentSatisfiedAltIcon />
        </IconButton>
      </Box>
      <InputMui
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <IconButton>
        <SendIcon />
      </IconButton>
    </Stack>
  );
}

export default Input;
