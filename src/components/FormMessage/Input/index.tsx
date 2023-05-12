import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import SendIcon from "@mui/icons-material/Send";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { Box, IconButton, Input as InputMui, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import useOnClickOutside from "@/hooks/useClickOutside";
import useSelectionStartInput from "@/hooks/useSelectionStartInput";
import findEmojiInText from "@/utils/findEmojiInText";

function Input() {
  const EmojiRef = useRef(null);
  const InputRef = useRef<HTMLInputElement>(null);
  const { position, setPosition } = useSelectionStartInput(InputRef);

  const [showEmojis, setShowEmojis] = useState(false);
  const [input, setInput] = useState<string>("");
  const [selectionRange, setSelectionRange] = useState<number>(0);

  useEffect(() => {
    InputRef.current?.setSelectionRange(selectionRange, selectionRange);
  }, [selectionRange]);
  useEffect(() => {
    const checkEmoji = async () => {
      const text = await findEmojiInText(input, 0);
      setInput(text);
      setSelectionRange(InputRef.current?.selectionStart ?? 0);
    };
    checkEmoji();
  }, [input]);

  const handleCloseEmoji = (event: Event) => {
    setShowEmojis(false);
    setPosition(input.length);
  };

  useOnClickOutside(EmojiRef, handleCloseEmoji);

  const handleSelectEmoji = (icon: string) => {
    const start = input.slice(0, position);
    const end = input.slice(position);
    setInput([...start, icon, ...end].join(""));
    InputRef.current?.focus();
    setTimeout(() => {
      InputRef.current?.setSelectionRange(
        position + icon.length,
        position + icon.length
      );
    }, 10);

    setPosition(position + icon.length);
  };

  const handleSubmit = () => {
    if (input.trim()) {
      console.log(input);
      setInput("");
    }
  };

  return (
    <Stack
      className="relative h-fit"
      direction="row"
      spacing={2}
      alignItems="center"
    >
      <Box ref={EmojiRef}>
        {showEmojis && (
          <Box className="absolute bottom-full left-0">
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
            if (showEmojis) {
              InputRef.current?.focus();
              setPosition(input.length);
            }
          }}
        >
          <SentimentSatisfiedAltIcon />
        </IconButton>
      </Box>
      <InputMui
        multiline
        maxRows={3}
        className="flex-grow"
        inputRef={InputRef}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
          if (e.ctrlKey && e.key === ".") {
            setShowEmojis(!showEmojis);
          }
        }}
        value={input}
      />
      <IconButton onClick={handleSubmit}>
        <SendIcon />
      </IconButton>
    </Stack>
  );
}

export default Input;
