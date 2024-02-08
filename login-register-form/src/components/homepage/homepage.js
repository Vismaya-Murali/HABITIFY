import React from 'react';
import './homepage.css';
import {useNavigate} from 'react-router-dom';

const redirecttoExternalSource= (url)=>{
  window.location.href=url;
}

const Homepage = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;

    switch (selectedOption) {
      case 'positive-affirmation':
        navigate('/pos'); 
        break;
      case 'to-do-list':
        navigate('/todo'); 
        break;
      case 'meditation':
        navigate('/meditation'); 
        break;
      case 'pomodoro':
          navigate('/pomodoro'); 
          break;
      case 'journal':
        // Redirect to a different port (e.g., port 5000)
        redirecttoExternalSource('http://localhost:5000')
        break;
      default:
        break;
    }
  };
 
  return (
    <body className='home'>
    <div className="homepage">
      <h1 id="heading">Habitify today for a Better tomorrow</h1>

      <div className="logout-button" onClick={() => setLoginUser({})}>
        Logout
      </div>

      <select id="dropdown" onChange={handleDropdownChange}>
        <option value="" disabled selected>
          What's on your mind?
        </option>
        <option value="to-do-list">To-Do List</option>
        <option value="pomodoro">Pomodoro</option>
        <option value="meditation">Meditation</option>
        <option value="positive-affirmation" >Positive Affirmation</option>
        <option value="journal">Journal</option>
      </select>
    </div>
    </body>
  );
};

export default Homepage;
