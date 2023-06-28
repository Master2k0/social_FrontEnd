import { useRouter } from "next/router";

import Friends from "@/containers/Profile/Friends";
import GroupPage from "@/containers/Profile/Groups";
import LayoutProfile from "@/containers/Profile/LayoutProfile";

import About from "./About";

function renderPage(page: string) {
  switch (page) {
    case "about":
      return <About />;
    case "friends":
      return <Friends />;
    case "groups":
      return <GroupPage />;
    case "photos":
      return <div>Photos</div>;
    case "videos":
      return <div>Videos</div>;
    default:
      return <div>Timeline</div>;
  }
}

function ProfileContainer() {
  const router = useRouter();
  return (
    <LayoutProfile>{renderPage(router.query.page as string)}</LayoutProfile>
  );
}

export default ProfileContainer;
