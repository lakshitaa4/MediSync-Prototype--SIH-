const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3001;

// Enable CORS to allow requests from the frontend
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Mock patient data
const patientData = {
  name: 'John Doe',
  age: 45,
  patientId: 'P123456',
  tokenNumber: 'T789012'
};

// Route to serve patient details
app.get('/api/patient-details', (req, res) => {
  // Simulating a delay to show the loading spinner in frontend
  setTimeout(() => {
    res.json(patientData);
  }, 1000); // 1-second delay before sending the response
});

// Serve the login page on the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
