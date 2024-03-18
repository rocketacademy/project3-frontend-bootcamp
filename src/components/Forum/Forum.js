import { Outlet } from "react-router-dom";
import ForumNavBar from "./ForumNavBar";
export default function Forum() {
  return (
    <div>
      <ForumNavBar />
      <Outlet />
    </div>
  );
}
