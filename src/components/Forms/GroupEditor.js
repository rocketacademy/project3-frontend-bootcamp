import "./Forms.css";
import { useEffect, useState } from "react";
import axios from "axios";

const GroupEditor = ({
  handleToggle,
  eventId,
  groupData,
  setGroupData,
  facilData,
}) => {
  const [facilOptions, setFacilOptions] = useState("");
  const [formRow, setFormRow] = useState([]);

  useEffect(() => {
    const getFacilOptions = async () => {
      setFacilOptions(() => {
        const options = facilData.map((facil) => (
          <option key={facil.id} value={facil.id}>
            {facil.name}
          </option>
        ));
        return <>{options}</>;
      });
    };
    getFacilOptions();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (facilOptions !== "") {
      setFormRow(() => {
        const rows = groupData.map((data) => (
          <div className="form-2up" key={Number(data.name) - 1}>
            <div className="input-with-header group">
              <h5>Group No.</h5>
              <h4>{data.name}</h4>
            </div>
            <div className="input-with-header facil">
              <h5>Facilitator Name</h5>
              <select
                type="text"
                id={Number(data.name) - 1}
                onChange={handleChange}
                value={data.facilitatorId}
              >
                {facilOptions}
              </select>
            </div>
          </div>
        ));
        return rows;
      });
    }
    // eslint-disable-next-line
  }, [facilOptions, groupData]);

  const handleSubmit = async (e) => {
    handleToggle(e);
    e.preventDefault();
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/groups/${eventId}`,
      { groupArray: groupData }
    );
    console.log(groupData);
    console.log(response.data.data);
    setGroupData(response.data.data);
  };

  const handleChange = (e) => {
    const id = Number(e.currentTarget.id) + 1;
    const facilId = e.currentTarget.value;
    const rowIndex = groupData.findIndex(
      (row) => Number(row.name) === Number(id)
    );
    setGroupData((prevGroups) => {
      let groups = [...prevGroups];
      groups[rowIndex].facilitatorId = facilId;
      return groups;
    });
  };

  return (
    <div id="pop-up">
      <div className="forms">
        <div className="header">
          <h1>Edit Groups</h1>
          <button onClick={handleToggle} id="groups-edit">
            <h5>Close</h5>
          </button>
        </div>
        <form>
          {formRow}
          <button onClick={handleSubmit} id="groups-edit">
            Save Groups
          </button>
        </form>
      </div>
    </div>
  );
};

export default GroupEditor;
