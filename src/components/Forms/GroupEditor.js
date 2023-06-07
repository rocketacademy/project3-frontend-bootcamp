import "./Forms.css";
import { useEffect, useState } from "react";
import axios from "axios";

const GroupEditor = ({ handleToggle, eventId, groupData, setGroupData }) => {
  const [facilOptions, setFacilOptions] = useState("");
  const [formRow, setFormRow] = useState([]);

  useEffect(() => {
    const getFacils = async () => {
      const facilitators = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/facilitators`
      );
      setFacilOptions(() => {
        const options = facilitators.data.map((facil) => (
          <option key={facil.id} value={facil.id}>
            {facil.name}
          </option>
        ));
        return <>{options}</>;
      });
    };
    getFacils();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (facilOptions !== "") {
      groupData.map((data) => {
        return setFormRow((prevRows) => [
          ...prevRows,
          <div className="form-2up">
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
          </div>,
        ]);
      });
    }
    // eslint-disable-next-line
  }, [facilOptions]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/groups/${eventId}`,
      { groupArray: groupData }
    );
    console.log(response);
  };

  const handleChange = (e) => {
    // setFacil(e.currentTarget.value);
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
          <button onClick={handleSubmit}>Save Groups</button>
        </form>
      </div>
    </div>
  );
};

export default GroupEditor;
