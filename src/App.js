import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import Archive from './pages/Archive';
import ArchiveEs from './pages/archive/es/Archive';
import './App.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [searchParams, setSearchParams] = useState(window.location.search);

  useEffect(() => {
    // Function to update state when URL changes
    const handleUrlChange = () => {
      console.log('URL change detected:', window.location.pathname, window.location.search);
      setCurrentPath(window.location.pathname);
      setSearchParams(window.location.search);
    };

    // Force initial state update
    handleUrlChange();

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

    // Poll for URL changes (catches HTTP redirects from Edge Functions)
    const urlPolling = setInterval(() => {
      const currentUrl = window.location.pathname + window.location.search;
      const storedUrl = currentPath + searchParams;
      
      if (currentUrl !== storedUrl) {
        console.log('URL changed via redirect, updating state');
        console.log('Current URL:', currentUrl);
        console.log('Stored URL:', storedUrl);
        handleUrlChange();
      }
    }, 100); // Check every 100ms

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
      clearInterval(urlPolling);
    };
  }, [currentPath, searchParams]);

  // Debug logging for current state
  console.log('Current App state:', { currentPath, searchParams });

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
          console.log('=== ROUTING DEBUG ===');
          console.log('Rendering route for path:', currentPath);
          console.log('Path type:', typeof currentPath);
          console.log('Path length:', currentPath.length);
          console.log('Does path start with /archive?:', currentPath.startsWith('/archive'));
          console.log('Does path start with /archive/?:', currentPath.startsWith('/archive/'));
          console.log('Path === "/archive":', currentPath === '/archive');
          console.log('Path === "/archive/":', currentPath === '/archive/');
          console.log('Path includes "archive":', currentPath.includes('archive'));
          console.log('=== END ROUTING DEBUG ===');
          
          switch (currentPath) {
            case '/profile':
              console.log('Rendering Profile component');
              return <Profile />;
            case '/blog':
              console.log('Rendering Blog component');
              return <Blog />;
            case '/archive':
              console.log('Rendering Archive component (exact match)');
              return <Archive />;
            case '/archive/es':
              console.log('Rendering Archive ES component (exact match)');
              return <ArchiveEs />;
            default:
              // Check if it's an archive ES URL pattern
              if (currentPath.startsWith('/archive/es/')) {
                console.log('Rendering Archive ES component for pattern:', currentPath);
                return <ArchiveEs />;
              }
              // Check if it's an archive URL pattern
              if (currentPath.startsWith('/archive/')) {
                console.log('Rendering Archive component for pattern:', currentPath);
                return <Archive />;
              }
              console.log('Rendering Home component');
              return <Home />;
          }
        })()}
      </main>
    </div>
  );
}

export default App;
