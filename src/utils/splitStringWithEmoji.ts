import Graphemer from "graphemer";

const splitter = new Graphemer();

export default function SplitStringWithEmoji(text: string): string[] {
  return splitter.splitGraphemes(text);
}

export const CountStringWithEmoji = (text: string): number =>
  splitter.countGraphemes(text);
