import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/SignUp/Register';
import Home from './pages/Home/home'
import Question from './pages/Question/Question';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="question/:id" element={<Question/>} />
      </Routes>
    </div>
  );
}

export default App
