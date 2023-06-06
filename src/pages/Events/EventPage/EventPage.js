//----------- React -----------//

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//---------- Components ----------//

import NavBar from "../../../components/NavBar/NavBar";
import Table from "../../../components/Table/Table";
import ParticipantAdder from "../../../components/Forms/ParticipantAdder";

//---------- Others ----------//

import { allColumns } from "../../../components/Table/columns";
import axios from "axios";
import "./EventPage.css";

//------------------------------//

const EventPage = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [data, setData] = useState(null);
  const [eventData, setEventData] = useState(null);
  const [toggleComposer, setToggleComposer] = useState(false);

  useEffect(() => {
    const getTableData = async () => {
      const rawData = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/events/${eventId}/participants`
      );
      const tableData = await rawData.data.map((raw) => ({
        ...raw.participant,
        egpId: raw.id,
        statusId: raw.statusId,
        isAttended: raw.isAttended,
      }));
      setData(tableData);
    };
    const getEventData = async () => {
      const event = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/events/${eventId}`
      );
      setEventData(event.data.event);
    };

    getTableData();
    getEventData();
    // eslint-disable-next-line
  }, []);

  const handleClick = (e) => {
    if (e.currentTarget.id === "back") {
      navigate(-1);
    } else if (e.currentTarget.id === "groupings") {
      navigate(`/events/${eventId}/groupings`);
    }
  };

  const handleToggle = () => {
    setToggleComposer((prev) => !prev);
  };

  return (
    <div className="contents">
      {toggleComposer && (
        <ParticipantAdder handleToggle={handleToggle} eventId={eventId} />
      )}
      <NavBar />
      <button onClick={handleClick} id="back">
        <h5>← Back</h5>
      </button>
      <div className="header">
        {eventData && <h1>{eventData.name}</h1>}
        <div className="header-buttons">
          <button onClick={handleToggle} id="groupings">
            <h5>Add Participants</h5>
          </button>
          <button onClick={handleClick} id="groupings">
            <h5>Groupings</h5>
          </button>
        </div>
      </div>
      {data && (
        <Table tableColumns={allColumns} tableData={data} options="status" />
      )}
    </div>
  );
};

export default EventPage;
