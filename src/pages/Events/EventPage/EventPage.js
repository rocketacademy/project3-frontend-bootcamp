import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import Table from "../../../components/Table/Table";
import { useEffect, useState } from "react";
import axios from "axios";

const EventPage = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const getTableData = async () => {
      const tableData = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/participants`
      );
      setData(tableData.data);
    };
    getTableData();
  }, []);

  const handleClick = (e) => {
    if (e.currentTarget.id === "back") {
      navigate(-1);
    }
  };

  return (
    <div className="contents">
      <NavBar />
      <button onClick={handleClick} id="back">
        Back to Events Home
      </button>
      <h1>{eventId} Page</h1>
      {data && <Table selector="eventpage" tableData={data} />}
    </div>
  );
};

export default EventPage;
