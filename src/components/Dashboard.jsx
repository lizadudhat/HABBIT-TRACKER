import React from 'react';

const Dashboard = ({ habits }) => {
  return (
    <div>
      <h2 className="text-white">Dashboard</h2>
      <div className="row">
        {habits.map((habit, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card "style={{border:"1px solid #412774"}}>
              <div className="card-header  text-white"style={{backgroundColor:"#412774"}}>
                <h5>{habit.name}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">Goal: {habit.goal}</p>
                <p className="card-text">Streak: {habit.streak}</p>
                <p className="card-text">Progress: {habit.progress}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
