import React from "react";
import { Link } from "react-router-dom";

const Career = ({ career }) => {
  return (
    <div className="careerCard bg-white shadow-md rounded-lg p-4 mb-4">
      <Link to={`/careers/${career.id}`}>
        <h1 className="text-2xl font-bold mb-2">{career.name}</h1>
      </Link>
      <h2 className="text-lg mb-2">{career.description}</h2>
      <h3 className="text-base mb-2">{career.requirements}</h3>
      <h3 className="text-base">{career.resources}</h3>
    </div>
  );
};

export default Career;