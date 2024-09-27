const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());

app.get('/api/v1/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});