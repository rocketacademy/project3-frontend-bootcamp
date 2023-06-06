import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import axios from "axios";
import Table from "../../components/Table/Table";
import { facilitatorColumns } from "../../components/Table/columns";
import FacilitatorAdder from "../../components/Forms/FacilitatorAdder";

const Facilitators = () => {
  const [data, setData] = useState(null);
  const [toggleComposer, setToggleComposer] = useState(false);

  useEffect(() => {
    const getTableData = async () => {
      const tableData = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/facilitators`
      );
      setData(tableData.data);
    };

    getTableData();
    // eslint-disable-next-line
  }, []);

  const handleToggle = () => {
    setToggleComposer((prev) => !prev);
  };

  return (
    <div className="contents">
      {toggleComposer && (
        <FacilitatorAdder handleToggle={handleToggle} setData={setData} />
      )}
      <NavBar />
      <div className="header">
        <h1>Facilitators</h1>
        <div className="header-buttons">
          <button onClick={handleToggle} id="groupings">
            <h5>Add Facilitator</h5>
          </button>
        </div>
      </div>
      {data && <Table tableColumns={facilitatorColumns} tableData={data} />}
    </div>
  );
};

export default Facilitators;
