import React from 'react';

const HabitTracking = ({ habits, updateHabit }) => {
  const toggleComplete = (index) => {
    const updatedHabits = habits.map((habit, i) =>
      i === index ? { ...habit, completed: !habit.completed } : habit
    );
    updateHabit(updatedHabits);
  };

  return (
    <div>
      <h2 style={{color:"#412774"}}>Habit Tracking</h2>
      <ul className="list-group">
        {habits.map((habit, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <span className={habit.completed ? "text-success" : ""}>{habit.name}</span>
              <br />
              <small className="text-muted">Goal: {habit.goal}</small>
            </div>
            <button className="btn "style={{color:"#412774",border:"1px solid #412774"}} onClick={() => toggleComplete(index)}>
              {habit.completed ? 'Completed' : 'Mark as Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracking;
