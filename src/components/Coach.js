import React from "react";
import { Link } from "react-router-dom";

const Coach = ({ coach }) => {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6 my-4">
      <Link to={`/coach/${coach.id}`} className="block">
        <h1 className="text-2xl font-bold text-gray-800">{coach.name}</h1>
        {coach.image && (
          <img
            className="w-full h-70 object-cover rounded-md shadow-md mt-4"
            src={coach.image}
            alt={coach.name}
          />
        )}
      </Link>
      <h2 className="text-lg text-gray-600">{coach.field}</h2>
      <h3 className="text-sm text-gray-500">{coach.bio}</h3>
      <h3 className="text-sm text-gray-500">{coach.gender}</h3>
    </div>
  );
};

export default Coach;