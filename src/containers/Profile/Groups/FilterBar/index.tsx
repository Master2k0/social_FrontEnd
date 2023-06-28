import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import { Box, Card, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface IPropsFilterBar {
  viewType: "grid" | "list";
  setViewType: React.Dispatch<React.SetStateAction<"grid" | "list">>;
}

function FilterBar({ viewType, setViewType }: IPropsFilterBar) {
  return (
    <Card
      sx={{
        borderRadius: "8px",
        boxShadow:
          "0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        padding: "20px",
      }}
    >
      <Box className="flex gap-4 items-center">
        <TextField placeholder="Search group" />
        <Box className="flex gap-1">
          <Typography>Groups</Typography>
          <Typography className="font-bold text-primary-400">82</Typography>
        </Box>
      </Box>
      <Box className="flex gap-4">
        <IconButton
          onClick={() => {
            setViewType("grid");
          }}
          className={`${
            viewType === "grid" ? "bg-primary-100" : "bg-gray-100"
          }`}
        >
          <GridViewIcon
            className={`${
              viewType === "grid" ? "text-primary-400" : "text-gray-400"
            } hover:text-primary-400 transition ease-in-out duration-500`}
          />
        </IconButton>
        <IconButton
          onClick={() => {
            setViewType("list");
          }}
          className={`${
            viewType === "list" ? "bg-primary-100" : "bg-gray-100"
          }`}
        >
          <ListIcon
            className={`${
              viewType === "list" ? "text-primary-400" : "text-gray-400"
            } hover:text-primary-400 transition ease-in-out duration-500`}
          />
        </IconButton>
      </Box>
    </Card>
  );
}

export default FilterBar;
