import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { BACKEND_URL } from "../constant";
import { UserContext } from "../Context/UserContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Classes() {
  const user = useContext(UserContext);
  const [classes, setClasses] = useState([]);

  console.log(user.dbUser);
  const getAllClasses = async () => {
    await axios.get(`${BACKEND_URL}/class`).then((res) => {
      const { data } = res;
      setClasses(data);
    });
  };

  useEffect(() => {
    getAllClasses();
  }, []);
  console.log(classes);

  const handleJoinButton = async (e) => {
    const classId = e.target.id;

    await axios
      .post(`${BACKEND_URL}/class`, {
        userId: user.dbUser.id,
        classSubjectId: classId,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const displayClasses = classes.map((classSubject) => (
    <div key={classSubject.id} id={classSubject.id}>
      {classSubject.name}{" "}
      <Button id={classSubject.id} onClick={handleJoinButton}>
        Join
      </Button>
    </div>
  ));

  return (
    <div>
      <div>{classes.length > 0 ? displayClasses : `no classes`}</div>
      <div>
        {" "}
        <div>
          <Link to={`/question/${user.dbUser.id}`}>My Questionnaire</Link>
        </div>
      </div>
    </div>
  );
}
