const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'pages')); 

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/survey', (req, res) => {
  res.render('survey'); 
});

app.post('/survey', (req, res) => {
  const surveyData = req.body;  
  console.log(surveyData);  

  res.send('Survey submitted successfully!');
});

app.get('/', (req, res) => {
  res.render('index');  
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
