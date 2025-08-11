import React from 'react';

function Profile() {
  return (
    <div className="page profile-page">
      <h2>User Profile</h2>
      <p>This is the profile page for testing Netlify redirects.</p>
      <div className="profile-content">
        <div className="profile-section">
          <h3>Profile Information</h3>
          <div className="profile-details">
            <p><strong>Name:</strong> Test User</p>
            <p><strong>Email:</strong> test@example.com</p>
            <p><strong>Role:</strong> Developer</p>
            <p><strong>Location:</strong> Remote</p>
          </div>
        </div>
        <div className="profile-section">
          <h3>About</h3>
          <p>This is a sample profile page created for investigating Netlify redirect behavior. You can use this route to test various redirect scenarios and configurations.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
