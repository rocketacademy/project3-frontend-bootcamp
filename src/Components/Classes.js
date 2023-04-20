import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "../constant";

export default function Classes() {
  const [classes, setClasses] = useState([]);
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

  const displayClasses = classes.map((classSubject) => (
    <div key={classSubject.id}>{classSubject.name}</div>
  ));

  return (
    <div>
      <div>{classes.length > 0 ? displayClasses : `no classes`}</div>
    </div>
  );
}
