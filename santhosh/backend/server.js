// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const projects = [
  { id: 1, name: 'Project 1', description: 'Description of project 1' },
  { id: 2, name: 'Project 2', description: 'Description of project 2' },
  { id: 3, name: 'Project 3', description: 'Description of project 3' },
];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
