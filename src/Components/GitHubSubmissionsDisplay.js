import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Paper } from "@mantine/core";
import { BACKEND_URL } from "../constants.js";
import "../Components/css/CadetChaptProgress.css";

const GitHubSubmissionsDisplay = () => {
  const [submissionsData, setSubmissionsData] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/gitHubSubmissions`);

        console.log("all submissions info", response.data);
        setSubmissionsData(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    fetchSubmissions();
  }, []);

  const rows = submissionsData.map((element) => (
    <tr key={element.id}>
      <td>{element.cadetId}</td>
      <td>{element.chapterId}</td>
      <td>{element.repoUrl}</td>
    </tr>
  ));

  return (
    <div>
      <Paper className="chapter-progress-list">
        <Table>
          <thead>
            <tr>
              <th>Cadet</th>
              <th>Chapter</th>
              <th>Repo Url</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Paper>
    </div>
  );
};

export default GitHubSubmissionsDisplay;
