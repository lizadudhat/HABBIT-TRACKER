import React, { useState } from 'react';

const HabitForm = ({ addHabit }) => {
  const [habitName, setHabitName] = useState('');
  const [goal, setGoal] = useState('');
  const [startDate, setStartDate] = useState('');
  const [frequency, setFrequency] = useState('daily');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName && goal && startDate) {
      addHabit({ name: habitName, goal, startDate, frequency });
      setHabitName('');
      setGoal('');
      setStartDate('');
      setFrequency('daily');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label htmlFor="habitName" className="form-label"style={{color:"#412774"}}>Habit Name</label>
        <input type="text" className="form-control" id="habitName" value={habitName} onChange={(e) => setHabitName(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="goal" className="form-label"style={{color:"#412774"}}>Goal</label>
        <input type="text" className="form-control" id="goal" value={goal} onChange={(e) => setGoal(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="startDate" className="form-label"style={{color:"#412774"}}>Start Date</label>
        <input type="date" className="form-control" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="frequency" className="form-label"style={{color:"#412774"}}>Frequency</label>
        <select className="form-select" id="frequency" value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <option value="monthly">monthly</option>
          <option value="daily">Daily</option>

          <option value="weekly">Weekly</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary"style={{color:"white",backgroundColor:"#412774",border:"none"}}>Add Habit</button>
    </form>
  );
};

export default HabitForm;
