import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/SignUp/Register';
import Question from './pages/DetailQuestion/DetailQuestion';
import CreateQuestion from './pages/CreateQuestion/CreateQuestion';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<div>List question</div>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="question" element={< Question/>} />
        <Route path="create-question" element={< CreateQuestion/>} />

      </Routes>
    </div>
  );
}

export default App;
