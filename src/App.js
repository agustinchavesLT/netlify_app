import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import Archive from './pages/Archive';
import './App.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [searchParams, setSearchParams] = useState(window.location.search);

  useEffect(() => {
    // Function to update state when URL changes
    const handleUrlChange = () => {
      setCurrentPath(window.location.pathname);
      setSearchParams(window.location.search);
    };

    // Listen for popstate (back/forward buttons)
    window.addEventListener('popstate', handleUrlChange);

    // Listen for pushstate/replacestate (programmatic navigation)
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      handleUrlChange();
    };

    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      handleUrlChange();
    };

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

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
            <li className="nav-item">
              <a href="/archive" className="nav-link">ARCHIVE</a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        {(() => {
          switch (currentPath) {
            case '/profile':
              return <Profile />;
            case '/blog':
              return <Blog />;
            case '/archive':
              return <Archive />;
            default:
              // Check if it's an archive URL pattern
              if (currentPath.startsWith('/archive/')) {
                return <Archive />;
              }
              return <Home />;
          }
        })()}
      </main>
    </div>
  );
}

export default App;
