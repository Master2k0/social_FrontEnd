import { Box } from "@mui/material";

import IconLogo from "@/icons/Logo";

export default function Left() {
  return (
    <Box className="flex items-end gap-2 justify-between">
      <div className="w-40 dark:text-white">
        <IconLogo />
      </div>
    </Box>
  );
}
