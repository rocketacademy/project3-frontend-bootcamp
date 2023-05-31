import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import Table from "../../../components/Table/Table";

const EventPage = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();

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
      <Table />
    </div>
  );
};

export default EventPage;
