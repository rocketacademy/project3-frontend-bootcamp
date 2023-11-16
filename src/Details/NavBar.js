//-----------Libaries-----------//
import { NavLink } from "react-router-dom";

//-----------Media-----------//
import logo from "../Images/Logo-GitHired.svg";
import { useNavigate } from "react-router-dom";

const NavBar = ({ name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="fixed top-0 flex w-screen flex-row items-center justify-between bg-primary p-3">
      <section className="z-20 flex flex-row gap-2">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/metrics">Metrics</NavLink>
        <NavLink to="/practice">Practice</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </section>

      <div className="fixed z-10 flex w-full justify-center">
        <button onClick={handleClick}>
          <img
            src={logo}
            className=" h-8 translate-x-[-12px] hover:translate-y-[-2px]"
            alt="GitHired Logo"
          />
        </button>
      </div>
      <div>{name ? name : "Please login"}</div>
    </div>
  );
};

export default NavBar;
