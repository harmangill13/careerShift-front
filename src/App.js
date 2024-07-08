import './App.css';
import Navbar from './Navbar';
import AllCareers from './pages/AllCareers';
import SingleCareer from './pages/SingleCareer';
import CareerForm from './pages/CareerForm';
import AllCoaches from './pages/AllCoaches';
import SingleCoach from './pages/SingleCoach';
import CoachForm from './pages/CoachForm';
import About from './pages/About';
import Home from './pages/Home';
//import hooks
import { useState, useEffect } from 'react';
// import components from React
import { Route, Routes } from 'react-router-dom';
// Remove the Carousel import
// import Carousel from './components/carousel.component';

// OUR API URL
const apiURL = 'https://career-shift-ac22110a7f97.herokuapp.com';

function App() {
  const [careers, setCareers] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [setError] = useState(null);

  //functions
  const getCareers = async () => {
    try {
      const response = await fetch(apiURL + '/careers/');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log(data);
      setCareers(data);
    } catch (error) {
      console.error("Error fetching careers:", error);
      setError(error.message);
    }
  };

  const getCoaches = async () => {
    try {
      const response = await fetch(apiURL + '/coaches/');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log(data);
      setCoaches(data);
    } catch (error) {
      console.error("Error fetching coaches:", error);
      setError(error.message);
    }
  };

  const handleFormSubmission = async (data, type) => {
    try {
      const response = await fetch(`${apiURL}/careers/${type === 'new' ? '' : `${data.id}/`}`, {
        method: type === 'new' ? 'POST' : 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      getCareers();
    } catch (error) {
      console.error(`Error ${type === 'new' ? 'creating' : 'updating'} career:`, error);
      setError(error.message);
    }
  };

  const handleCoachFormSubmission = async (data, type) => {
    try {
      const response = await fetch(`${apiURL}/coaches/${type === 'new' ? '' : `${data.id}/`}`, {
        method: type === 'new' ? 'POST' : 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      getCoaches();
    } catch (error) {
      console.error(`Error ${type === 'new' ? 'creating' : 'updating'} coach:`, error);
      setError(error.message);
    }
  };

  const deleteCareer = async (id) => {
    await fetch(`${apiURL}/careers/${id}/`, {
      method: 'delete',
    });
    getCareers();
  };

  const deleteCoach = async (id) => {
    await fetch(`${apiURL}/coaches/${id}/`, {
      method: 'delete',
    });
    getCoaches();
  };

  //useEffect
  useEffect(() => {
    getCareers();
    getCoaches();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Careers */}
        <Route
          exact
          path="/careers"
          element={<AllCareers careers={careers} />}
        />
        <Route
          exact
          path="/careers/:id"
          element={<SingleCareer careers={careers} deleteCareer={deleteCareer} />}
        />
        <Route
          exact
          path="/newcareer"
          element={<CareerForm careers={careers} handleSubmit={handleFormSubmission} buttonLabel="Add Career" formType="new" />}
        />
        <Route
          exact
          path="/editcareer/:id"
          element={<CareerForm careers={careers} handleSubmit={handleFormSubmission} buttonLabel="Edit Career" formType="edit" />}
        />
        {/* Coaches */}
        <Route
          exact
          path="/coaches"
          element={<AllCoaches coaches={coaches} />}
        />
        <Route
          exact
          path="/coach/:id"
          element={<SingleCoach coaches={coaches} deleteCoach={deleteCoach} />}
        />
        <Route
          exact
          path="/newcoach"
          element={<CoachForm coaches={coaches} handleSubmit={handleCoachFormSubmission} buttonLabel="Add Coach" formType="new" />}
        />
        <Route
          exact
          path="/editcoach/:id"
          element={<CoachForm coaches={coaches} handleSubmit={handleCoachFormSubmission} buttonLabel="Edit Coach" formType="edit" />}
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;