const express = require('express');
const app = express();
const path = require('path');

const PORT = 8000;

app.get('/', (req, res) => {
  res.send('This is a message from the server!');
});

app.post('/', (req, res) => {
  res.send('Got a POST request');
});

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

app.delete('/user/:id', (req, res) => {
  res.send('Got a delete request at /user');
});

app.patch('/user/:id', (req, res) => {
  res.send('Got a patch request at /user/:id');
});

// app.use(express.static('public/images'));
// app.use(express.static('public/javascripts'));
// app.use(express.static('public/stylesheets'));

// app.use('static', express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.status(404).send('404: Sorry, something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
