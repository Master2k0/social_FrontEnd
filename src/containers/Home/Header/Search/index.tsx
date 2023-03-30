import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

import useSearch from "@/hooks/queries/search/search";
import { useDebounce } from "@/hooks/useDebounce";

import DropDown from "./Dropdown";

interface ISearchProps {
  searchFn: (search: string) => void;
}

export default function Search() {
  const [search, setSearch] = useState<string>("");
  const { data, refetch } = useSearch(search);
  useEffect(() => {
    if (search) {
      refetch();
    }
  }, [search]);
  const debounce = useDebounce();
  return (
    <div className="border-2 border-solid border-blue-400 rounded-lg  bg-blue-400 relative w-[400px] h-12 cursor-text box-border pl-10 pr-2 hover:border-blue-300">
      <SearchIcon
        sx={{ fontSize: 30 }}
        className="absolute top-2/4 left-[5px] -translate-y-2/4"
      />
      <input
        onChange={(e) => {
          debounce(() => {
            setSearch(e.target.value);
          }, 500);
        }}
        className="bg-inherit p-0 text-xl text-inherit outline-none w-full h-full border-none"
      />
      {data?.data.length && search !== "" ? (
        <DropDown data={data.data} />
      ) : null}
    </div>
  );
}
