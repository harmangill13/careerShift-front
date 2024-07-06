import { useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const SingleCareer = ({ careers, deleteCareer }) => {
  const params = useParams();
  const navigate = useNavigate();
  const currentCareer = useMemo(
    () => careers.find(career => career.id === parseInt(params.id)),
    [params.id, careers]
  );

  const handleDelete = () => {
    deleteCareer(currentCareer.id);
    navigate('/careers');
  };

  if (!currentCareer) {
    return <div>Career not found</div>;
  }

  return (
    <div className="singleCareer">
      <h1 className="text-4xl font-bold mb-4">{currentCareer.name}</h1>
      <h3 className="text-lg mb-2">{currentCareer.description}</h3>
      <h3 className="text-lg mb-2">{currentCareer.requirements}</h3>
      <h3 className="text-lg mb-4">{currentCareer.resources}</h3>

      <Link to={`/editcareer/${params.id}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Edit
        </button>
      </Link>
      <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
        Delete
      </button>
      <Link to={`/careers`} className="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        Back
      </Link>
    </div>
  );
};

export default SingleCareer;