import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Labs from './Labs';
import Kanbas from './Kanbas';
import Repos from './Repos';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Repos/*" element={<Repos />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
