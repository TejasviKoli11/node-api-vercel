import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Your dashboard content */}
      
      <Link to="/signup" className="signup-link">Sign Up</Link>
    </div>
  );
};

export default Dashboard;
