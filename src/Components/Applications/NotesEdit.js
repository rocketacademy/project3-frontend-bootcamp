import axios from "axios";
import { useState, useEffect } from "react";

const NotesEdit = ({ currentNote, refresh }) => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const [noteData, setNoteData] = useState({
    id: null,
    applicationId: null,
    title: "",
    content: "",
  });

  // Set Current Note Data
  useEffect(() => {
    if (currentNote) {
      const { id, applicationId, title, content } = currentNote;
      setNoteData({ id, applicationId, title, content });
    }
  }, [currentNote]);

  // Edit notes data
  const updateNote = () => {
    axios
      .put(`${BACKEND_URL}/applications/notes/edit/${noteData.id}`, noteData)
      .then((response) => {
        setNoteData(response.data.data);
        refresh();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const textChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setNoteData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <button className="m-1 flex h-full w-full shrink-0 flex-col rounded-md bg-slate-600 p-1 ">
      <div>
        <input
          id="title"
          className="w-full rounded-lg bg-slate-500 px-2 font-bold"
          type="text"
          value={noteData && noteData.title}
          onChange={textChange}
        />
        <button onClick={updateNote}>update</button>
      </div>

      <textarea
        id="content"
        className="w-full bg-slate-600 p-1"
        type="text"
        rows="22"
        cols="30"
        value={noteData && noteData.content}
        onChange={textChange}
      />
    </button>
  );
};

export default NotesEdit;
