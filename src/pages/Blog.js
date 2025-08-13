import React from 'react';

function Blog() {
  const params = new URLSearchParams(window.location.search);
  const rawCategory = (params.get('type') || '').toLowerCase();

  const categoryMap = {
    food: 'Food',
    drinks: 'Drinks',
    other: 'Other',
  };

  const category = categoryMap[rawCategory] || null;

  return (
    <div className="page blog-page">
      <h2>Blog</h2>
      {category ? (
        <div>
          <h3>Category: {category}</h3>
          <p>Showing posts for the {category.toLowerCase()} category.</p>
        </div>
      ) : (
        <p>
          This is the blog page for testing Netlify redirects. Try visiting
          <code> /category?type=food</code>, <code>/category?type=drinks</code>, or
          <code>/category?type=other</code> to be redirected here with a category filter.
        </p>
      )}
      <div className="blog-content">
        <div className="blog-post">
          <h3>Understanding Netlify Redirects</h3>
          <p className="post-meta">Published: Today | Category: Development</p>
          <p>This blog post explores the various ways Netlify handles redirects and how to configure them properly for your applications.</p>
          <p>Redirects are essential for maintaining SEO value and providing a smooth user experience when URLs change or when you want to redirect users to different pages.</p>
        </div>
        
        <div className="blog-post">
          <h3>Common Redirect Scenarios</h3>
          <p className="post-meta">Published: Yesterday | Category: Tutorial</p>
          <p>Learn about common redirect scenarios you might encounter when deploying applications to Netlify, including:</p>
          <ul>
            <li>301 redirects for permanent moves</li>
            <li>302 redirects for temporary moves</li>
            <li>Custom redirect rules</li>
            <li>Handling SPA routing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Blog;
