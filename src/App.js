import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';
import LoginPage from './components/LoginPage';
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
          <Route path="/" element={<HomePage/>} />
          <Route path="/detail" element={<DetailPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
