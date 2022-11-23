import React from "react";
import { useParams, Link } from "react-router-dom";
import { Text } from "@mantine/core";

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
    </div>
  );
};

export default CourseMaterials;
