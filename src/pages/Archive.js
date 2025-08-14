import React from 'react';

function Archive() {
  try {
    console.log('Archive component is being rendered!');
    
    // Safely get the path
    let path = '';
    try {
      path = window.location.pathname || '';
      console.log('Current path in Archive:', path);
    } catch (pathError) {
      console.error('Error getting path:', pathError);
      path = 'unknown';
    }
    
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
        
        <h3>Debug Info:</h3>
        <p>Path length: {path.length}</p>
        <p>Path starts with /archive: {path.startsWith('/archive') ? 'Yes' : 'No'}</p>
        <p>Full path: <code>{path}</code></p>
      </div>
    );
  } catch (error) {
    console.error('Archive component error:', error);
    return (
      <div className="page archive-page">
        <h2>Archive Error</h2>
        <p>There was an error rendering the Archive component:</p>
        <p><strong>{error.message}</strong></p>
        <p>Stack trace:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  }
}

export default Archive;
