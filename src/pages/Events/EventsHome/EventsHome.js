import NavBar from "../../../components/NavBar/NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import "./EventsHome.css";
import { useState } from "react";
import EventComposer from "../../../components/Forms/EventComposer";

const EventsHome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [toggleComposer, setToggleComposer] = useState(false);

  const handleClick = (e) => {
    navigate(location.pathname + "/" + e.currentTarget.id);
  };

  const handleToggle = () => {
    setToggleComposer((prev) => !prev);
  };

  return (
    <div className="contents">
      {toggleComposer && <EventComposer handleToggle={handleToggle} />}
      <NavBar />
      <div className="header">
        <h1>Events Home</h1>
        <button onClick={handleToggle}>Add Event</button>
      </div>
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
