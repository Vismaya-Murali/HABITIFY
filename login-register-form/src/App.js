import './App.css';
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import AffirmationBoxes from "./components/pa/pos";
import TaskList from "./components/todo/todo";
import Meditation from "./components/meditation/meditation";
import Pomodoro from "./components/p/components-p/app"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
          } />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pos" element={<AffirmationBoxes/>}/>
          <Route path="/todo" element={<TaskList/>}/>
          <Route path="/meditation" element={<Meditation/>}/>
          <Route path="/pomodoro" element={<Pomodoro/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
