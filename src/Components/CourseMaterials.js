import React from "react";
import { useParams, Link } from "react-router-dom";
import { Text } from "@mantine/core";
import ModalDemo from "./Modal";

const CourseMaterials = () => {
  return (
    <div className="git-book">
      <Text component={Link} variant="link" to="/frontend">
        Frontend
      </Text>
      <h2>Frontend</h2>
      <h2>Gitbook</h2>
      <h2>Gitbook</h2>
      <h2>Gitbook</h2>
      <h2>Gitbook</h2>
      <h2>Gitbook</h2>
      <h2>Gitbook</h2>
      <h2>Gitbook</h2>
      <h2>Gitbook</h2>
      <ModalDemo />
    </div>
  );
};

export default CourseMaterials;
