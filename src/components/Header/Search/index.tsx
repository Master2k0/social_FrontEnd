import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

import {
  Icon,
  Input,
  SearchContainer,
} from "@/components/Header/Search/styles";
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
    <SearchContainer>
      <Icon>
        <SearchIcon />
      </Icon>
      <Input
        onChange={(e) => {
          debounce(() => {
            setSearch(e.target.value);
          }, 500);
        }}
      />
      {data?.data.length && search !== "" ? (
        <DropDown data={data.data} />
      ) : null}
    </SearchContainer>
  );
}
