const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// GET route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'develop/public/index.html'));
});

// GET route for the notes page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'develop/public/notes.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
