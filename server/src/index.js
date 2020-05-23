const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

const frontendPath = '/frontend/app';

app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.get('/*', (req, res) => {
  if (req && req.url && req.url.indexOf('.') > -1) {
    res.sendFile(path.join(frontendPath, req.url));
  } else {
    res.sendFile(path.join(frontendPath, 'index.html'));
  }
});

const port = process.env.PORT || 8080;
app.listen(port, async () => {
  console.log(`Server listening on port ${port}...`);
});
