const express = require('express');
const hbs = require('hbs');
const path = require('path');
const axios = require('axios');

const port = process.env.PORT || 3000;
const app = express();

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/poster', (req, res) => {
  const title = req.query.title;
  // API keys from OMDB
  const api_id = process.env.API_ID;
  const api_key = process.env.API_KEY;
  axios.get(`http://omdbapi.com/?i=${api_id}&apikey=${api_key}&t=${title}`)
    .then(response => {
      const poster = response.data.Poster;
      res.send({poster});
    })
    .catch(error => {
      console.log("Unable to fetch movie data");
      res.send({error: "Unable to fetch movie data"})
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
