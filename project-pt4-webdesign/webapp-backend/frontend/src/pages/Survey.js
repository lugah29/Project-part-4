import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Survey = () => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [formData, setFormData] = useState({
    creator: '',
    email: '',
    topicSpecificField: '', 
    feedback: ''
  });
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
    setFormData({
      creator: '',
      email: '',
      topicSpecificField: '',
      feedback: ''
    });
    setError(''); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.creator || !formData.email || !formData.topicSpecificField) {
      setError('Please fill out all required fields.');
      return;
    }

    try {
      await axios.post(`http://localhost:5000/api/surveys/${selectedTopic}`, formData);
      navigate('/', { state: { ...formData, selectedTopic, favoriteChoice: formData.topicSpecificField } });
    } catch (error) {
      console.error('Error submitting the survey:', error);
      setError('There was an error submitting your survey. Please try again.');
    }
  };

  return (
    <div>
      <h1>Choose a Survey Topic</h1>
      <label>
        Topic:
        <select value={selectedTopic} onChange={handleTopicChange} required>
          <option value="" disabled>Select a topic</option>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="technology">Technology</option>
        </select>
      </label>

      <br /><br />

      {selectedTopic && (
        <div>
          <h2>{`${selectedTopic.charAt(0).toUpperCase() + selectedTopic.slice(1)} Survey`}</h2>

          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="creator"
                value={formData.creator}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            
            {selectedTopic === 'food' && (
              <label>
                Favorite Cuisine:
                <input
                  type="text"
                  name="topicSpecificField"
                  value={formData.topicSpecificField}
                  onChange={handleChange}
                  required
                />
              </label>
            )}
            {selectedTopic === 'travel' && (
              <label>
                Favorite Travel Destination:
                <input
                  type="text"
                  name="topicSpecificField"
                  value={formData.topicSpecificField}
                  onChange={handleChange}
                  required
                />
              </label>
            )}
            {selectedTopic === 'technology' && (
              <label>
                Favorite Gadget or App:
                <input
                  type="text"
                  name="topicSpecificField"
                  value={formData.topicSpecificField}
                  onChange={handleChange}
                  required
                />
              </label>
            )}
            <br />

            <label>
              Feedback:
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
              ></textarea>
            </label>
            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Survey;
