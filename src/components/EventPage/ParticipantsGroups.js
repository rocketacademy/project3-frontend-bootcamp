//----------- React -----------//

import { useParams } from "react-router-dom";

//---------- Components ----------//

import Table from "../Table/Table";

//---------- Others ----------//

import { groupingColumns } from "../Table/columns";
import { useEffect, useState } from "react";

//------------------------------//

const ParticipantsGroups = ({
  data,
  setData,
  eventData,
  handleToggle,
  toggleTab,
}) => {
  const { eventId } = useParams();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data.filter((participant) => participant.statusId === 5));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setFilteredData((prevData) => {
      const sortedData = [...prevData];
      sortedData.sort((a, b) => a.groupId - b.groupId);
      return sortedData;
    });
    //eslint-disable-next-line
  }, [filteredData]);

  return (
    <>
      <div className="header">
        {eventData && <h1>{eventData.name}</h1>}
        <div className="header-buttons">
          <button onClick={handleToggle} id="groups">
            <h5>Add</h5>
          </button>
          <button onClick={handleToggle} id="groups-edit">
            <h5>Edit</h5>
          </button>
          <button onClick={handleToggle} id="participants">
            <h5>Generate</h5>
          </button>
        </div>
      </div>
      <div className="event-page-tabs">
        <button onClick={toggleTab} id="all" className="inactive">
          <h5>All Participants</h5>
        </button>
        <button id="groupings" className="active">
          <h5>Groupings</h5>
        </button>
      </div>
      {data && (
        <Table
          tableColumns={groupingColumns}
          tableData={filteredData}
          setTableData={setData}
          options="attendance"
          eventId={eventId}
        />
      )}
    </>
  );
};

export default ParticipantsGroups;
