const express = require('express');
const cors = require('cors');
require('dotenv').config(); 
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json()); 


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const foodRoutes = require('./survey-api/routes/foodRoutes');
const travelRoutes = require('./survey-api/routes/travelRoutes');
const technologyRoutes = require('./survey-api/routes/technologyRoutes');

const userRoutes = require('./survey-api/routes/UserRoutes');

app.use('/api/surveys/food', foodRoutes);
app.use('/api/surveys/travel', travelRoutes);
app.use('/api/surveys/technology', technologyRoutes);

app.use('/api/users', userRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
