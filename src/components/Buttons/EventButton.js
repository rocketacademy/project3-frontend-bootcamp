import "./EventButton.css";

const EventButton = ({ onClick, id, children }) => {
  return (
    <button className="event-home-button" onClick={onClick} id={id}>
      <div>
        <h2>{children.name}</h2>
        <h5>
          {children.date} • {children.startTime} – {children.endTime}
        </h5>
      </div>
      <div>
        <h1>→</h1>
      </div>
    </button>
  );
};

export default EventButton;
