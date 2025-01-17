const cors = require('cors');
const express = require('express');
const app = express();

// Add middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

app.post('/brs/data', async (req, res) => {
  try {
    const response = await fetch(`https://www.instagram.com/${req.body.input}/?__a=1&__d=dis`); // Replace with your actual API endpoint
    const resp = await response.json();
    console.log(resp);
    res.json(resp);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.get('/brs/data', async (req, res) => {
  try {
    res.json({ error: 'Success' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
