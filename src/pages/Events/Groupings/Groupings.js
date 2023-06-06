import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar.js";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/Table/Table.js";
import { groupingColumns } from "../../../components/Table/columns.js";

const Groupings = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [data, setData] = useState(null);
  const [eventData, setEventData] = useState(null);

  const handleClick = (e) => {
    if (e.currentTarget.id === "back") {
      navigate(-1);
    }
  };

  useEffect(() => {
    const getTableData = async () => {
      const tableData = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/participants`
      );
      setData(tableData.data);
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

  return (
    <div className="contents">
      <NavBar />
      <button onClick={handleClick} id="back">
        <h5>← Back</h5>
      </button>
      <div className="header">
        {eventData && <h1>{eventData.name} Groups</h1>}
        <div className="header-buttons">
          <button>
            <h5>Generate Groups</h5>
          </button>
        </div>
      </div>
      {data && (
        <Table
          tableColumns={groupingColumns}
          tableData={data}
          options="attendance"
        />
      )}
    </div>
  );
};

export default Groupings;
