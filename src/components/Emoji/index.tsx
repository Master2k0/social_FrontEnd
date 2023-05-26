import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { useGetLocalStorage } from "@/hooks/useGetLocalStorage";

export interface EmojiContainerProps {
  handleSelect: (icon: string) => void;
}

function EmojiContainer(props: EmojiContainerProps) {
  const { handleSelect } = props;
  const [theme] = useGetLocalStorage("theme", "light");
  return (
    <Picker
      data={data}
      previewPosition="none"
      theme={theme}
      onEmojiSelect={(icon: any) => {
        handleSelect(icon.native);
      }}
    />
  );
}

export default EmojiContainer;
