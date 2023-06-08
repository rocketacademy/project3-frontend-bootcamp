//----------- React -----------//

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//---------- Components ----------//

import NavBar from "../../../components/NavBar/NavBar";
import ParticipantAdder from "../../../components/Forms/ParticipantAdder";
import ParticipantsAll from "../../../components/EventPage/ParticipantsAll";
import ParticipantsGroups from "../../../components/EventPage/ParticipantsGroups";
import GroupAdder from "../../../components/Forms/GroupAdder";
import GroupEditor from "../../../components/Forms/GroupEditor";

//---------- Others ----------//

import axios from "axios";
import "./EventPage.css";

//------------------------------//

const EventPage = () => {
  const navigate = useNavigate();

  //---------- Data ----------//

  const { eventId } = useParams();
  const [data, setData] = useState(null);
  const [eventData, setEventData] = useState(null);
  const [groupData, setGroupData] = useState(null);
  const [facilData, setFacilData] = useState(null);

  //---------- UI ----------//

  const [toggleComposer, setToggleComposer] = useState({
    composer: false,
    groupAdd: false,
    groupEdit: false,
  });
  const [tab, setTab] = useState("all");

  //------------------------------//

  useEffect(() => {
    const getTableData = async () => {
      const rawData = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/events/${eventId}/participants`
      );
      const tableData = await rawData.data.data.map((raw) => ({
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
      setGroupData(groups.data.data);
    };
    const getFacilData = async () => {
      const facilitators = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/facilitators`
      );
      setFacilData(facilitators.data.data);
    };

    getTableData();
    getEventData();
    getGroupData();
    getFacilData();
    // eslint-disable-next-line
  }, []);

  const handleClick = (e) => {
    if (e.currentTarget.id === "back") {
      navigate(-1);
    }
  };

  const handleToggle = (e) => {
    if (e.currentTarget.id === "participants") {
      setToggleComposer((prev) => ({ ...prev, composer: !prev.composer }));
    } else if (e.currentTarget.id === "groups") {
      setToggleComposer((prev) => ({ ...prev, groupAdd: !prev.groupAdd }));
    } else if (e.currentTarget.id === "groups-edit") {
      setToggleComposer((prev) => ({ ...prev, groupEdit: !prev.groupEdit }));
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
      {toggleComposer.composer && (
        <ParticipantAdder handleToggle={handleToggle} eventId={eventId} />
      )}
      {toggleComposer.groupAdd && (
        <GroupAdder
          handleToggle={handleToggle}
          eventId={eventId}
          groupData={groupData}
          setGroupData={setGroupData}
          facilData={facilData}
        />
      )}
      {toggleComposer.groupEdit && (
        <GroupEditor
          handleToggle={handleToggle}
          eventId={eventId}
          groupData={groupData}
          setGroupData={setGroupData}
          facilData={facilData}
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
          groupData={groupData}
          facilData={facilData}
        />
      )}
    </div>
  );
};

export default EventPage;
