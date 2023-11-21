//-----------Libaries-----------//
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//-----------Components-----------//
import NotesPreview from "./NotesPreview";
import NotesEdit from "./NotesEdit";

const NotesSection = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const { id } = useParams();

  const [currentNote, setCurrentNote] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/users/1/${id}/notes`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const refresh = () => {
    axios
      .get(`${BACKEND_URL}/users/1/${id}/notes`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const data2 = [
    {
      id: 1,
      applicationId: 2,
      title: "Interview Feedback",
      content:
        "Positive feedback on technical skills. Positive feedback on technical skills.",
    },
    {
      id: 2,
      applicationId: 5,
      title: "Company Culture",
      content:
        "Team-oriented culture with emphasis on innovation. Team-oriented culture with emphasis on innovation. Team-oriented culture with emphasis on innovation.",
    },
    {
      id: 3,
      applicationId: 2,
      title: "Interview Feedback",
      content: "Positive feedback on technical skills.",
    },
    {
      id: 4,
      applicationId: 5,
      title: "Company Culture",
      content:
        "Team-oriented culture with emphasis on innovation. Team-oriented culture with emphasis on innovation. Team-oriented culture with emphasis on innovation.",
    },
    {
      id: 5,
      applicationId: 2,
      title: "Interview Feedback",
      content: "Positive feedback on technical skills.",
    },
    {
      id: 6,
      applicationId: 5,
      title: "Company Culture",
      content:
        "Team-oriented culture with emphasis on innovation. Team-oriented culture with emphasis on innovation. Team-oriented culture with emphasis on innovation.",
    },
    {
      id: 7,
      applicationId: 2,
      title: "Interview Feedback",
      content: "Positive feedback on technical skills.",
    },
    {
      id: 8,
      applicationId: 5,
      title: "Company Culture",
      content:
        "Team-oriented culture with emphasis on innovation. Team-oriented culture with emphasis on innovation. Team-oriented culture with emphasis on innovation.",
    },
    {
      id: 9,
      applicationId: 2,
      title: "Interview Feedback",
      content: "Positive feedback on technical skills.",
    },
    {
      id: 10,
      applicationId: 5,
      title: "Company Culture",
      content:
        "Team-oriented culture with emphasis on innovation. Team-oriented culture with emphasis on innovation. Team-oriented culture with emphasis on innovation.",
    },
  ];

  // Allows toggling between notes
  const select = (id) => {
    setCurrentNote(id);
  };

  // Function to sort a single data point by id
  const findDataById = (id) => {
    return data && data.find((item) => item.id === id);
  };

  // Request data by id
  const currentNoteData = findDataById(currentNote);

  return (
    <div className="flex h-full w-full flex-row ">
      <aside className="w-1/3 overflow-y-auto">
        <div className="flex h-[200px] flex-col">
          {console.log("data", data)}
          {data &&
            data.map((note, index) => (
              <NotesPreview key={index} data={note} select={select} />
            ))}
        </div>
      </aside>
      <main className="w-2/3 bg-green-200">
        <NotesEdit currentNote={currentNoteData} refresh={refresh} />
      </main>
    </div>
  );
};

export default NotesSection;
