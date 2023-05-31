import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    navigate(`/${e.currentTarget.id}`);
  };
  return (
    <div id="header">
      <h1>Friendzone</h1>
      <div id="header-links">
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

export default Header;
