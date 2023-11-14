//-----------Libaries-----------//
import { Outlet } from "react-router-dom";
//-----------Components-----------//
import NavBar from "../Components/Details/NavBar";
import Dashboard from "../Components/DashboardPage/Dashboard";
import NewApplication from "../Components/DashboardPage/NewApplication";

//-----------Media-----------//

export default function DashboardPage() {
  return (
    <div className="flex h-screen flex-col overflow-x-auto bg-background">
      <NavBar />
      <Dashboard />
      <Outlet />
      <NewApplication />
    </div>
  );
}
