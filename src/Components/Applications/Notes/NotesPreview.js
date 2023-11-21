//-----------Library-----------//
import axios from "axios";

const NotesPreview = ({ data, select, refresh }) => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const { id, applicationId, title, content } = data;

  const previewContent =
    content.length > 60 ? `${content.substring(0, 80)}...` : content;

  const deleteNote = async () => {
    axios
      .delete(`${BACKEND_URL}/applications/notes/delete/${id}`)
      .then(() => {
        refresh();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="m-1 flex w-[280px] flex-row rounded-md bg-slate-600">
      <button
        className=" flex h-[60px] w-full flex-col rounded-md p-1 hover:bg-slate-500"
        onClick={() => select(id)}
      >
        <h1 className=" text-sm ">{title}</h1>
        <h1 className="text-left text-[10px] ">{previewContent}</h1>
      </button>
      <button
        className="text-md mb-auto ml-auto w-4 rounded-bl-md rounded-tr-md bg-slate-700 p-1 leading-none hover:text-slate-400"
        onClick={deleteNote}
      >
        x
      </button>
    </div>
  );
};

export default NotesPreview;
