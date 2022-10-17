import logo from './logo.svg';
import './App.css';
import Login from './Component/login';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Register from './Component/register';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
