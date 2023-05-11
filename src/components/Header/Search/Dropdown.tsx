import { styled } from "@mui/system";

import { type ISearch } from "@/types/apis/search";

import ItemDropDown from "./ItemDropDown";

interface IProps {
  data: ISearch[];
}

const Conatiner = styled("div")(() => ({
  "@keyframes slideDown": {
    "0%": {
      transform: "translateY(0)",
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  animation: "slideDown 0.3s ease-in-out",
}));

export default function DropDown(props: IProps) {
  const { data } = props;
  return (
    <Conatiner className="w-[400px] absolute top-full -left-0.5 translate-y-3 bg-slate-200 rounded-lg p-2 box-border flex flex-col gap-4 ease-in-out duration-300 transition-all">
      {data.map((item) => (
        <ItemDropDown key={item.slug} data={item} />
      ))}
    </Conatiner>
  );
}
