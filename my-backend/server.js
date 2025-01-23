const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');  // Import the cors package

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 4000; // Backend running on port 4000

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(bodyParser.json());

// Handle GET request to the root path
app.get("/", (req, res) => {
  res.send("Hello from the backend!");  // Just a test message to check if server is working
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === 'test@example.com' && password === 'password123') {
        res.status(200).json({ message: 'Login successful!' });
    } else {
        res.status(401).json({ message: 'Invalid credentials!' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
