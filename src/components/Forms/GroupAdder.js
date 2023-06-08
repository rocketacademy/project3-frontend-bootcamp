import "./Forms.css";
import { useEffect, useState } from "react";
import axios from "axios";

const GroupAdder = ({ handleToggle, eventId, groupData, setGroupData }) => {
  const [groupCount, setGroupCount] = useState(null);
  const [facilOptions, setFacilOptions] = useState("");
  const [formRow, setFormRow] = useState([]);
  const [createdRows, setCreatedRows] = useState([]);

  useEffect(() => {
    const getFacils = async () => {
      const facilitators = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/facilitators`
      );
      setFacilOptions(() => {
        const options = facilitators.data.data.map((facil) => (
          <option key={facil.id} value={facil.id}>
            {facil.name}
          </option>
        ));
        return <>{options}</>;
      });
    };
    getFacils();
    setGroupCount(groupData.length);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (facilOptions !== "") {
      setFormRow([
        <div className="form-2up" key={groupCount + 1}>
          <div className="input-with-header group">
            <h5>Group No.</h5>
            <h4>{groupCount + 1}</h4>
          </div>
          <div className="input-with-header facil">
            <h5>Facilitator Name</h5>
            <select type="text" id={0} onChange={handleChange}>
              {facilOptions}
            </select>
          </div>
        </div>,
      ]);
      setCreatedRows([
        {
          name: String(groupCount + 1),
          facilitatorId: Number(facilOptions.props.children[0].key),
        },
      ]);
      setGroupCount((prevCount) => prevCount + 1);
    }

    // eslint-disable-next-line
  }, [facilOptions]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/groups/${eventId}`,
      { groupArray: createdRows }
    );
    setGroupData((prevGroups) => [...prevGroups, ...response.data.data]);
  };

  const handleChange = (e) => {
    const id = e.currentTarget.id;
    const facilId = e.currentTarget.value;
    setCreatedRows((rows) => {
      const updatedRows = [...rows];
      updatedRows[id] = {
        name: updatedRows[id].name,
        facilitatorId: Number(facilId),
      };
      return updatedRows;
    });
  };

  console.log(createdRows);

  const addRow = (e) => {
    e.preventDefault();
    setFormRow((prevRows) => [
      ...prevRows,
      <div className="form-2up" key={groupCount + 1}>
        <div className="input-with-header group">
          <h5>Group No.</h5>
          <h4>{groupCount + 1}</h4>
        </div>
        <div className="input-with-header facil">
          <h5>Facilitator Name</h5>
          <select type="text" id={prevRows.length} onChange={handleChange}>
            {facilOptions}
          </select>
        </div>
      </div>,
    ]);
    setCreatedRows((prevRows) => [
      ...prevRows,
      {
        name: String(groupCount + 1),
        facilitatorId: Number(facilOptions.props.children[0].key),
      },
    ]);
    setGroupCount((prevCount) => prevCount + 1);
  };

  return (
    <div id="pop-up">
      <div className="forms">
        <div className="header">
          <h1>Add Groups</h1>
          <button onClick={handleToggle} id="groups">
            <h5>Close</h5>
          </button>
        </div>
        <form>
          {formRow}
          <button onClick={addRow}>Add Row</button>
          <button onClick={handleSubmit}>Create Groups</button>
        </form>
      </div>
    </div>
  );
};

export default GroupAdder;
