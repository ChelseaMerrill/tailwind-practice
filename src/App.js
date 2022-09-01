import logo from './logo.svg';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './pages/home';
import Compute from './pages/compute';
import Databases from './pages/database';
import Infrastructure from './pages/infrastructure';
import Networking from './pages/networking';
import Operations from './pages/operations';
import Security from './pages/security';
import Services from './pages/services';
import Storage from './pages/storage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/compute' element={<Compute/>} />
      <Route exact path='/storage' element={<Storage/>} />
      <Route exact path='/database' element={<Databases/>} />
      <Route exact path='/networking' element={<Networking/>} />
      <Route exact path='/security' element={<Security/>} />
      <Route exact path='/operations' element={<Operations/>} />
      <Route exact path='/infrastructure' element={<Infrastructure/>} />
      <Route exact path='/services' element={<Services/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
