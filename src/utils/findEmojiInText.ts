import data from "@emoji-mart/data";
import { getEmojiDataFromNative, init } from "emoji-mart";

init({ data });

const findEmojiInText = async (
  text: string,
  position: number
): Promise<string> => {
  const index = text.indexOf(":", position);
  if (index !== -1) {
    const stringSameEmoji = text.slice(index);
    const [stringOfEmoji] = stringSameEmoji.split(" ");
    if (stringOfEmoji.length > 1) {
      const emoji = await getEmojiDataFromNative(stringOfEmoji);
      if (emoji) {
        const start = text.slice(0, index);
        const end = text.slice(index + stringOfEmoji.length);
        return [...start, emoji.native, ...end].join("");
      }
    }
    return await findEmojiInText(text, position + 1);
  }
  return text;
};

export default findEmojiInText;
