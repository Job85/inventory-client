import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        App Header
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
