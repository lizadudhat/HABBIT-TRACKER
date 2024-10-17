import React, { useState } from 'react';

const Profile = ({ profile, updateProfile }) => {
  const [name, setName] = useState(profile.name);
  const [goal, setGoal] = useState(profile.goal);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({ name, goal });
  };

  return (
    <div>
      <h2 style={{color:"#412774"}}>Profile Management</h2>
      <form onSubmit={handleSubmit} className="bg-light p-4 border rounded shadow">
        <div className="mb-3">
          <label className="form-label"style={{color:"#412774"}}>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Goal</label>
          <input
            type="text"style={{color:"#412774"}}
            className="form-control"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn "style={{backgroundColor:"#412774",color:"white"}}>Update Profile</button>
      </form>
      <h3 className="mt-3">Current Profile</h3>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Goal:</strong> {profile.goal}</p>
    </div>
  );
};

export default Profile;
