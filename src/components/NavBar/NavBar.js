import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    navigate(`/${e.currentTarget.id}`);
  };

  return (
    <div id="nav">
      <h2>Friendzone</h2>
      <div id="nav-links">
        <button onClick={handleNavigate} id="events">
          <h5>Events</h5>
        </button>
        <button onClick={handleNavigate} id="participants">
          <h5>Participants</h5>
        </button>
        <button onClick={handleNavigate} id="facils">
          <h5>Facilitators</h5>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
