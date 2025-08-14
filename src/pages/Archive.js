import React from 'react';

function Archive() {
  console.log('Archive component is being rendered!');
  
  return (
    <div className="page archive-page">
      <h2>Archive Page - TEST VERSION</h2>
      <p>This is a minimal test version.</p>
      <p>If you can see this, the component is working!</p>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}

export default Archive;
