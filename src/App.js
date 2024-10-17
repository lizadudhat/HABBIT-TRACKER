import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './App.css'
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import HabitForm from './components/HabitForm';
import HabitTracking from './components/HabitTracking'; 
import Profile from './components/Profile';
import NotificationPanel from './components/NotificationPanel';

function App() {
  const [habits, setHabits] = useState([]);
  const [profile, setProfile] = useState({ name: '', goal: '' });
  const [notifications, setNotifications] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, { ...habit, streak: 0, progress: 0, completed: false }]);
    toast.success(`New habit "${habit.name}" added!`); 
    addNotification(`New habit "${habit.name}" added!`); 
  };

  const updateHabit = (updatedHabits) => {
    setHabits(updatedHabits);
    toast.info('Habits updated successfully!'); 
    addNotification('Habits updated successfully!'); 
  };

  const updateProfile = (newProfile) => {
    setProfile(newProfile);
    toast.info('Profile updated successfully!'); 
    addNotification('Profile updated successfully!'); 
  };

  const addNotification = (message) => {
    setNotifications((prev) => [...prev, message]);
    toast.info(message); 
  };

  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <div className="row">
          
          <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block  sidebar"style={{backgroundColor:"lightpurple",boxShadow:"9px 9px 9px white",padding:"20px"}}>
            <div className="position-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link" to="/"style={{marginTop:"40px"}}>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/habit-management"style={{marginTop:"10px"}}>
                    Habit Management
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/habit-tracking"style={{marginTop:"10px"}}>
                    Habit Tracking
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile"style={{marginTop:"10px"}}>
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/notifications"style={{marginTop:"10px"}}>
                    Notifications
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

        
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="pt-3">
              <Routes>
                <Route path="/" element={<Dashboard habits={habits} />} />
                <Route path="/habit-management" element={<HabitForm addHabit={addHabit} />} />
                <Route path="/habit-tracking" element={<HabitTracking habits={habits} updateHabit={updateHabit} />} />
                <Route path="/profile" element={<Profile profile={profile} updateProfile={updateProfile} />} />
                <Route path="/notifications" element={<NotificationPanel notifications={notifications} />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover /> {/* ToastContainer */}
    </Router>
  );
}

export default App;
