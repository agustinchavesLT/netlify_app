import React from 'react';

function Archive() {
  console.log('Archive component is being rendered!');
  
  const path = window.location.pathname;
  console.log('Current path in Archive:', path);
  
  return (
    <div className="page archive-page">
      <h2>Archive Page</h2>
      <p>This is the archive page.</p>
      <p>Current path: <strong>{path}</strong></p>
      <p>If you can see this, the Archive component is working!</p>
      
      <h3>Test Links:</h3>
      <ul>
        <li><a href="/blog/2024/08/14/test-post">Test redirect 1</a></li>
        <li><a href="/blog/2023/12/25/christmas-post">Test redirect 2</a></li>
        <li><a href="/blog/2022/01/01/new-year-post">Test redirect 3</a></li>
      </ul>
    </div>
  );
}

export default Archive;
