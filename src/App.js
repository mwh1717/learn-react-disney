import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/detail" element={<DetailPage/>} />
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
