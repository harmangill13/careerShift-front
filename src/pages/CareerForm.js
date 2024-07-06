import { useMemo, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

const CareerForm = (props) => {
  const navigate = useNavigate();
  const params = useParams();

  // Current career for edit
  const currentCareer = useMemo(() => props.careers.find(career => career.id === parseInt(params.id)), [params.id, props.careers]);

  const [formData, setFormData] = useState(
    props.formType === 'new' ? {
      name: '',
      description: '',
      requirements: '',
      resources: '',
    } : {
      name: currentCareer ? currentCareer.name : '',
      description: currentCareer ? currentCareer.description : '',
      requirements: currentCareer ? currentCareer.requirements : '',
      resources: currentCareer ? currentCareer.resources : '',
      id: currentCareer ? parseInt(currentCareer.id) : null
    }
  );

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    props.handleSubmit(formData, props.formType);
    navigate('/careers');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <Link to="/careers" className="inline-block mb-2 text-indigo-600 hover:text-indigo-800">
          &larr; Back to Careers
        </Link>
      </div>
      <form onSubmit={handleSubmission}>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{props.formType === 'new' ? 'Add New Career' : 'Edit Career'}</h1>

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
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="resources" className="block text-sm font-medium text-gray-700 mb-1">Resources</label>
          <textarea
            id="resources"
            name="resources"
            value={formData.resources}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
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

export default CareerForm;