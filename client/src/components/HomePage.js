import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to the Chat App</h1>
      <p>This is a simple landing page.</p>
      <Link to="/chat">
        <button>Go to Chat Page</button>
      </Link>
    </div>
  );
};

export default HomePage;