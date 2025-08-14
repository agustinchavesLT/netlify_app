import React from 'react';

function Archive() {
  const path = window.location.pathname;
  
  console.log('Archive component rendered with path:', path);
  
  // Extract date components from URL like /archive/2024/08/14/some-post
  const archivePattern = /^\/archive\/(\d{4})\/(\d{2})\/(\d{2})\/(.+)$/;
  const match = path.match(archivePattern);
  
  console.log('Archive pattern match:', match);
  
  if (match) {
    try {
      const [, year, month, day, slug] = match;
      
      // Validate the date components
      const yearNum = parseInt(year, 10);
      const monthNum = parseInt(month, 10);
      const dayNum = parseInt(day, 10);
      
      console.log('Parsed values:', { yearNum, monthNum, dayNum, slug });
      
      // Check if date is valid
      if (isNaN(yearNum) || isNaN(monthNum) || isNaN(dayNum)) {
        throw new Error('Invalid date components');
      }
      
      if (monthNum < 1 || monthNum > 12 || dayNum < 1 || dayNum > 31) {
        throw new Error('Date out of range');
      }
      
      const date = new Date(yearNum, monthNum - 1, dayNum); // month is 0-indexed
      
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
      }
      
      console.log('Valid date created:', date);
      
      return (
        <div className="page archive-page">
          <h2>Archive Post</h2>
          <div className="archive-content">
            <div className="post-meta">
              <p><strong>Date:</strong> {date.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
              <p><strong>Slug:</strong> {slug}</p>
              <p><strong>Full URL:</strong> {path}</p>
            </div>
            
            <div className="post-content">
              <h3>Sample Archive Content</h3>
              <p>This is a sample archive post that demonstrates the regex redirect logic.</p>
              <p>The Edge Function successfully redirected you from a date-based blog URL to this archive format.</p>
              
              <h4>URL Pattern Tested:</h4>
              <code>/blog/{yearNum}/{monthNum}/{dayNum}/{slug}</code> → <code>/archive/{yearNum}/{monthNum}/{dayNum}/{slug}</code>
              
              <h4>Test Other Patterns:</h4>
              <ul>
                <li><a href="/blog/2024/08/14/test-post">/blog/2024/08/14/test-post</a> (should redirect here)</li>
                <li><a href="/blog/2023/12/25/christmas-post">/blog/2023/12/25/christmas-post</a> (should redirect here)</li>
                <li><a href="/blog/2022/01/01/new-year-post">/blog/2022/01/01/new-year-post</a> (should redirect here)</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } catch (error) {
      console.error('Error processing archive URL:', error);
      return (
        <div className="page archive-page">
          <h2>Archive Error</h2>
          <p>There was an error processing this archive URL: {path}</p>
          <p>Error: {error.message}</p>
          <p>Please check the URL format and try again.</p>
        </div>
      );
    }
  }
  
  // Fallback if no match
  console.log('No pattern match, showing fallback');
  return (
    <div className="page archive-page">
      <h2>Archive</h2>
      <p>This is the archive page. To test regex redirects, visit a URL like:</p>
      <code>/blog/2024/08/14/any-post-title</code>
      <p>It should automatically redirect you to:</p>
      <code>/archive/2024/08/14/any-post-title</code>
    </div>
  );
}

export default Archive;
