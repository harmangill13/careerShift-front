import { useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const SingleCoach = ({ coaches, deleteCoach }) => {
  const params = useParams();
  const navigate = useNavigate();
  const currentCoach = useMemo(
    () => coaches.find(coach => coach.id === parseInt(params.id)),
    [params.id, coaches]
  );

  const handleDelete = () => {
    deleteCoach(currentCoach.id);
    navigate('/coaches');
  };

  if (!currentCoach) {
    return <div className="text-center text-xl text-red-500">Coach not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">{currentCoach.name}</h1>
        {currentCoach.image && (
          <img
            className="w-40 h-40 rounded-full object-cover shadow-md"
            src={currentCoach.image}
            alt={currentCoach.name}
          />
        )}
        <h3 className="text-2xl text-gray-600">{currentCoach.field}</h3>
        <h3 className="text-lg text-gray-500">{currentCoach.bio}</h3>
        <h3 className="text-lg text-gray-500">{currentCoach.gender}</h3>

        <div className="flex space-x-4 mt-4">
          <Link to={`/editcoach/${params.id}`}>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Edit</button>
          </Link>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
          <Link to={`/coaches`}>
            <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCoach;