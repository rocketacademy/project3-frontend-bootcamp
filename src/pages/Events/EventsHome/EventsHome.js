import NavBar from "../../../components/NavBar/NavBar";
import { useLocation, useNavigate } from "react-router-dom";

const EventsHome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(location.pathname + "/" + e.currentTarget.id);
  };
  return (
    <div className="contents">
      <NavBar />
      <h1>Events Home</h1>
      <button onClick={handleClick} id="event-1">
        Event 1
      </button>
      <button onClick={handleClick} id="event-2">
        Event 2
      </button>
      <button onClick={handleClick} id="event-3">
        Event 3
      </button>
    </div>
  );
};

export default EventsHome;
