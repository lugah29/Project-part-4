import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SurveyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [favoriteChoice, setFavoriteChoice] = useState('');
  const [topic, setTopic] = useState('');
  const [feedback, setFeedback] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSurvey = { name, email, favoriteChoice, topic, feedback };

    
    axios.post('http://localhost:5000/api/surveys/food', newSurvey)
      .then((response) => {
        navigate('/', { state: newSurvey }); 
      })
      .catch((error) => {
        console.error('Error submitting survey:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Favorite Choice"
        value={favoriteChoice}
        onChange={(e) => setFavoriteChoice(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        required
      />
      <textarea
        placeholder="Your feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
      />
      <button type="submit">Submit Survey</button>
    </form>
  );
};

export default SurveyForm;
