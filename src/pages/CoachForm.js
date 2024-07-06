import { useMemo, useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

const CoachForm = (props) => {
  const navigate = useNavigate();
  const params = useParams();

  // Current coach for edit
  const currentCoach = useMemo(() => props.coaches.find(coach => coach.id === parseInt(params.id)), [params.id, props.coaches]);

  const [formData, setFormData] = useState({
    name: '',
    field: '',
    bio: '',
    gender: '',
    image: ''
  });

  useEffect(() => {
    if (currentCoach) {
      setFormData({
        name: currentCoach.name || '',
        field: currentCoach.field || '',
        bio: currentCoach.bio || '',
        gender: currentCoach.gender || '',
        image: currentCoach.image || '',
        id: parseInt(currentCoach.id)
      });
    }
  }, [currentCoach]);

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    props.handleSubmit(formData, props.formType);
    navigate('/coaches');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <Link to="/coaches" className="inline-block mb-2 text-indigo-600 hover:text-indigo-800">
          &larr; Back to Coaches
        </Link>
      </div>
      <form onSubmit={handleSubmission}>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{props.formType === 'new' ? 'Add New Coach' : 'Edit Coach'}</h1>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="field" className="block text-sm font-medium text-gray-700 mb-1">Field</label>
          <input
            type="text"
            id="field"
            name="field"
            value={formData.field}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="inline-block bg-indigo-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {props.buttonLabel}
        </button>
      </form>
    </div>
  );
};

export default CoachForm;