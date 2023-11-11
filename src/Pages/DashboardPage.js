//-----------Libaries-----------//
import { NavLink, Outlet } from "react-router-dom";
//-----------Components-----------//
import NavBar from "../Components/Details/NavBar";
import Dashboard from "../Components/DashboardPage/Dashboard";

//-----------Media-----------//

export default function DashboardPage() {
  return (
    <div className="flex h-screen flex-col overflow-x-auto bg-background">
      <NavBar />
      <Dashboard />
      <Outlet />

      <NavLink to="/dashboard/add">
        <button className="fixed bottom-6 right-6 h-[60px] w-[60px] rounded-full bg-primary text-[30px] leading-none shadow-md">
          +
        </button>
      </NavLink>
    </div>
  );
}
