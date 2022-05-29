import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/SignUp/Register';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<div>List question</div>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="question/:id" element={<div>Detail question</div>} />
      </Routes>
    </div>
  );
}

export default App;
