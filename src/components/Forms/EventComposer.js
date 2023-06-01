import "./Forms.css";
import { useState } from "react";

const EventComposer = ({ handleToggle }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [venue, setVenue] = useState("");
  const [csv, setCsv] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title,
      date,
      type,
      start,
      end,
      venue,
      csv,
    };
    console.log(event);
    setTitle("");
    setDate("");
    setType("");
    setStart("");
    setEnd("");
    setVenue("");
    setCsv(null);
  };

  const handleChange = (e) => {
    switch (e.currentTarget.id) {
      case "title":
        setTitle(e.currentTarget.value);
        break;
      case "date":
        setDate(e.currentTarget.value);
        break;
      case "type":
        setType(e.currentTarget.value);
        break;
      case "start":
        setStart(e.currentTarget.value);
        break;
      case "end":
        setEnd(e.currentTarget.value);
        break;
      case "venue":
        setVenue(e.currentTarget.value);
        break;
      case "csv":
        setCsv(e.currentTarget.value);
        break;
      default:
        return console.log(e.currentTarget.id);
    }
  };

  return (
    <div id="pop-up">
      <div className="form-event">
        <div className="header">
          <h1>Add Event</h1>
          <button onClick={handleToggle}>Close</button>
        </div>

        <form>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            placeholder="Event Title"
            value={title}
          />

          <div className="form-2up">
            <div className="input-with-header">
              <h5>Date</h5>
              <input
                type="date"
                id="date"
                onChange={handleChange}
                placeholder="Event Date"
                value={date}
              />
            </div>

            <div className="input-with-header">
              <h5>Event type</h5>
              <select
                type="text"
                id="type"
                onChange={handleChange}
                value={type}
              >
                <option value="neighbourhood">Neighbourhood</option>
                <option value="open">Open-To-All</option>
                <option value="sector">Sector-Based</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>

          <div className="form-2up">
            <div className="input-with-header">
              <h5>Start</h5>
              <input
                type="time"
                id="start"
                onChange={handleChange}
                value={start}
              />
            </div>

            <div className="input-with-header">
              <h5>End</h5>
              <input type="time" id="end" onChange={handleChange} value={end} />
            </div>
          </div>

          <input
            type="text"
            id="venue"
            onChange={handleChange}
            placeholder="Venue"
            value={venue}
          />
          <div className="input-with-header">
            <h5>Upload Participant CSV File</h5>
            <input
              type="file"
              id="csv"
              placeholder="Upload Participant CSV File"
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EventComposer;
