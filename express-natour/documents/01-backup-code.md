### First piece of code with express

```javascript
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .send({ message: 'Hello from the server side!', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.status(201).send('You can post to this endpoint ...');
});

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port} ...`);
});
```
