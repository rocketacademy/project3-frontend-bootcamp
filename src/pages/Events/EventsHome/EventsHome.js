import NavBar from "../../../components/NavBar/NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import "./EventsHome.css";
import { useEffect, useState } from "react";
import EventComposer from "../../../components/Forms/EventComposer";
import axios from "axios";
import EventButton from "../../../components/Buttons/EventButton";

const EventsHome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [toggleComposer, setToggleComposer] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getTableData = async () => {
      const eventList = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/events`
      );
      console.log(eventList.data);
      setData(eventList.data);
    };
    getTableData();
  }, []);

  const handleClick = (e) => {
    navigate(location.pathname + "/" + e.currentTarget.id);
  };

  const handleToggle = () => {
    setToggleComposer((prev) => !prev);
  };
  if (!data) {
    return <p>Loading...</p>;
  } else {
    const buttons = data.map((event) => (
      <EventButton onClick={handleClick} id={event.id} key={event.id}>
        {event}
      </EventButton>
    ));

    return (
      <div className="contents">
        {toggleComposer && <EventComposer handleToggle={handleToggle} />}
        <NavBar />
        <div className="header">
          <h1>Events Home</h1>
          <button onClick={handleToggle}>Add Event</button>
        </div>
        {buttons}
      </div>
    );
  }
};

export default EventsHome;
