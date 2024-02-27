const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('Hello from the server ...');
});

app.post('/post', (req, res) => {
  res.send('Post has been created!');
});

app.delete('/post/:id', (req, res) => {
  res.send('Post has beend deleted!');
});

app.use((req, res, next) => {
  res.status(404).send('Not found!');
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
