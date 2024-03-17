import { Outlet } from "react-router-dom";
export default function Forum() {
  return (
    <div>
      <p className="text-2xl">forum</p>
      <Outlet />
    </div>
  );
}
