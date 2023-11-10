//-----------Libaries-----------//
import { NavLink } from "react-router-dom";

//-----------Media-----------//
import logo from "../../Images/Logo-GitHired.svg";

const NavBar = () => {
  return (
    <div className="fixed top-0 z-10 flex w-screen flex-row items-center justify-between bg-slate-900 p-3">
      <section className="z-20 flex flex-row gap-2">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/metrics">Metrics</NavLink>
        <NavLink to="/practice">Practice</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </section>

      <img src={logo} className="fixed h-8 w-full" alt="GitHired Logo" />
    </div>
  );
};

export default NavBar;
