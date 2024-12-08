import React from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const location = useLocation();
  const surveyData = location.state;

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the MernTech Survey App</h1>
      </header>

      {surveyData && (
        <section className="survey-results">
          <h2>Survey Results</h2>
          <p><strong>Name:</strong> {surveyData.creator}</p>
          <p><strong>Email:</strong> {surveyData.email}</p>
          <p><strong>Topic:</strong> {surveyData.selectedTopic}</p>
          <p><strong>Favorite Choice:</strong> {surveyData.favoriteChoice}</p>
          <p><strong>Feedback:</strong> {surveyData.feedback}</p>          
        </section>
      )}
    </div>
  );
};

export default Home;
