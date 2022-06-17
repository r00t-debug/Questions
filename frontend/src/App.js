import { useState } from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.css";
import Dashboard from './pages/Dashboard'
import Domaine from './pages/Domaine'
import Domaines from './pages/Domaines'
import Pdf from './pages/Pdf'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        {Domaines.map((domaine, index) => (
          <Route key={index} path={"/domaine" + (index+1)} element={<Domaine key={index+1} arr={domaine.data} domaine={index+1} title={domaine.title} />}></Route>
        ))}
        <Route path='/pdf' element={<Pdf />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
