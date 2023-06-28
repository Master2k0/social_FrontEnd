import { Box } from "@mui/material";

import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";

interface ILayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: ILayoutProps) {
  return (
    <Box className="bg-light-200 dark:bg-darkDark-200 min-h-[100vh]">
      <Header />
      <Box className="mx-auto w-[80%]">{children}</Box>
      <MenuBar />
    </Box>
  );
}

export default Layout;
