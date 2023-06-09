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
  groupData,
  setGroupData,
  facilData,
}) => {
  const { eventId } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setFilteredData(
      data.filter((participant) => Number(participant.statusId) === 5)
    );
    //eslint-disable-next-line
  }, []);

  // To sort

  useEffect(() => {
    let facilGroups = groupData.map((group) => {
      const index = facilData.findIndex(
        (facil) => Number(facil.id) === Number(group.facilitatorId)
      );
      return {
        name: facilData[index].name,
        groupId: Number(group.name),
      };
    });

    setTableData(() => {
      const sortedData = [...filteredData, ...facilGroups];
      sortedData.sort((a, b) => {
        if (a.groupId === b.groupId) {
          if (a.mobile && b.mobile) {
            return a.groupId - b.groupId;
          } else {
            return !a.mobile ? -1 : 1;
          }
        } else {
          return a.groupId - b.groupId;
        }
      });
      return sortedData;
    });
    //eslint-disable-next-line
  }, [filteredData, data, groupData]);

  return (
    <>
      <div className="header">
        {eventData && <h1>{eventData.name}</h1>}
        <div className="header-buttons">
          <button onClick={handleToggle} id="groups">
            <h5>Add</h5>
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
          tableData={tableData}
          setTableData={setData}
          options="attendance"
          eventId={eventId}
          groupData={groupData}
          setGroupData={setGroupData}
          facilData={facilData}
        />
      )}
    </>
  );
};

export default ParticipantsGroups;
