import React from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-title">Netlify Redirects Investigation</h1>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-link">HOME</a>
            </li>
            <li className="nav-item">
              <a href="/profile" className="nav-link">PROFILE</a>
            </li>
            <li className="nav-item">
              <a href="/blog" className="nav-link">BLOG</a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        {(() => {
          const path = window.location.pathname;
          switch (path) {
            case '/profile':
              return <Profile />;
            case '/blog':
              return <Blog />;
            case '/old-home':
              return <Blog />;
            default:
              return <Home />;
          }
        })()}
      </main>
    </div>
  );
}

export default App;
