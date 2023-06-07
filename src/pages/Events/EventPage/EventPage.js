//----------- React -----------//

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//---------- Components ----------//

import NavBar from "../../../components/NavBar/NavBar";
import ParticipantAdder from "../../../components/Forms/ParticipantAdder";
import ParticipantsAll from "../../../components/EventPage/ParticipantsAll";
import ParticipantsGroups from "../../../components/EventPage/ParticipantsGroups";
import GroupAdder from "../../../components/Forms/GroupAdder";

//---------- Others ----------//

import axios from "axios";
import "./EventPage.css";
import GroupEditor from "../../../components/Forms/GroupEditor";

//------------------------------//

const EventPage = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [data, setData] = useState(null);
  const [eventData, setEventData] = useState(null);
  const [groupData, setGroupData] = useState(null);
  const [togglePComposer, setTogglePComposer] = useState(false);
  const [toggleGComposer, setToggleGComposer] = useState(false);
  const [toggleGEditor, setToggleGEditor] = useState(false);
  const [tab, setTab] = useState("all");

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
        groupId: raw.groupId,
      }));
      setData(tableData);
    };
    const getEventData = async () => {
      const event = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/events/${eventId}`
      );
      setEventData(event.data.event);
    };
    const getGroupData = async () => {
      const groups = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/groups/${eventId}`
      );
      console.log(groups.data);
      setGroupData(groups.data);
    };

    getTableData();
    getEventData();
    getGroupData();
    // eslint-disable-next-line
  }, []);

  const handleClick = (e) => {
    if (e.currentTarget.id === "back") {
      navigate(-1);
    }
  };

  const handleToggle = (e) => {
    if (e.currentTarget.id === "participants") {
      setTogglePComposer((prev) => !prev);
    } else if (e.currentTarget.id === "groups") {
      setToggleGComposer((prev) => !prev);
    } else if (e.currentTarget.id === "groups-edit") {
      setToggleGEditor((prev) => !prev);
    }
  };

  const toggleTab = () => {
    if (tab === "all") {
      setTab("groupings");
    } else {
      setTab("all");
    }
  };

  return (
    <div className="contents" id="event-page">
      {togglePComposer && (
        <ParticipantAdder handleToggle={handleToggle} eventId={eventId} />
      )}
      {toggleGComposer && (
        <GroupAdder
          handleToggle={handleToggle}
          eventId={eventId}
          groupData={groupData}
          setGroupData={setGroupData}
        />
      )}
      {toggleGEditor && (
        <GroupEditor
          handleToggle={handleToggle}
          eventId={eventId}
          groupData={groupData}
          setGroupData={setGroupData}
        />
      )}
      <NavBar />
      <button onClick={handleClick} id="back">
        <h5>← Back</h5>
      </button>
      {tab === "all" ? (
        <ParticipantsAll
          data={data}
          setData={setData}
          eventData={eventData}
          handleToggle={handleToggle}
          toggleTab={toggleTab}
        />
      ) : (
        <ParticipantsGroups
          data={data}
          setData={setData}
          eventData={eventData}
          handleToggle={handleToggle}
          toggleTab={toggleTab}
        />
      )}
    </div>
  );
};

export default EventPage;
