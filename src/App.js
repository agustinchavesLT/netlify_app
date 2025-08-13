import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-title">Netlify Redirects Investigation</h1>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">PROFILE</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">BLOG</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/old-home" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
