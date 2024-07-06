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

  //functions
  const getCareers = async () => {
    const response = await fetch(apiURL + '/careers/');
    const data = await response.json();
    console.log(data);
    setCareers(data);
  };

  const getCoaches = async () => {
    const response = await fetch(apiURL + '/coaches/');
    const data = await response.json();
    console.log(data);
    setCoaches(data);
  };

  const handleFormSubmission = async (data, type) => {
    if (type === 'new') {
      await fetch(`${apiURL}/careers/`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      getCareers();
    } else {
      await fetch(`${apiURL}/careers/${data.id}/`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      getCareers();
    }
  };

  const handleCoachFormSubmission = async (data, type) => {
    if (type === 'new') {
      await fetch(`${apiURL}/coaches/`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      getCoaches();
    } else {
      await fetch(`${apiURL}/coaches/${data.id}/`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      getCoaches();
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