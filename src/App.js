import logo from './logo.svg';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './pages/home';
import Compute from './pages/compute';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home/>} />
      <Route exact path='/compute' element={<Compute/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
