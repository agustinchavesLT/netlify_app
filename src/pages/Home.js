import React from 'react';

function Home() {
  return (
    <div className="page home-page">
      <h2>Welcome to the Home Page</h2>
      <p>This is the main landing page for our Netlify redirects investigation.</p>
      <div className="content-section">
        <h3>About This Project</h3>
        <p>This React application is designed to test and investigate how Netlify handles various redirect scenarios.</p>
        <p>Use the navigation menu above to explore different routes and test redirect functionality.</p>
      </div>
      <div className="features">
        <h3>Available Routes:</h3>
        <ul>
          <li><strong>HOME</strong> - You are here</li>
          <li><strong>PROFILE</strong> - User profile information</li>
          <li><strong>BLOG</strong> - Blog posts and articles</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
