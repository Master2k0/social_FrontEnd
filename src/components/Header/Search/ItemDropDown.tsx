import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Link from "next/link";

import { type ISearch } from "@/types/apis/search";

interface IProps {
  data: ISearch;
}

export default function ItemDropDown(props: IProps) {
  const { data } = props;
  return (
    <Link
      style={{ textDecoration: "none" }}
      href={{
        pathname: "/[slug]",
        query: { slug: data.slug },
      }}
    >
      <div className="w-full ">
        <Stack spacing={4} direction="row" alignItems="center">
          <Avatar alt={data.name} src={data.image} />
          <Typography>{data.name}</Typography>
        </Stack>
      </div>
    </Link>
  );
}
