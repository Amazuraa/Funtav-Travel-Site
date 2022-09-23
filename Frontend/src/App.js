import logo from './logo.svg';
import './App.css';

import {Routes, Route} from "react-router-dom"

import Landing from './container/Landing';
import Tours from './container/Tours';
import ToursRequest from './container/ToursRequest';
import Dashboard from './container/Dashboard';
import DashboardRequest from './container/DashboardRequest';
import Login from './container/Login';
import Register from './container/Register';

function App() {

  return (
    <div className="App">

      <div className=''>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Tours" element={<Tours />} />
          
          <Route path="/Admin" element={<Dashboard />} />
          <Route path="/ToursRequest" element={<ToursRequest />} />
          <Route path="/Admin/Request" element={<DashboardRequest />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
