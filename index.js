const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// middleware
app.use(express.json());
app.use(bodyParser.json());
env.config();


// Connect to MongoDB
mongoose.connect(
    'mongodb://127.0.0.1:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
    }).then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Define a User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });
  
  // Create a User Model
const User = mongoose.model('User', userSchema);
  

const port = process.env.PORT || 5000;


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});


app.get('/', (req, res)=>{
    res.send("Music Reviews Api")
})

// POST route to create a user
app.post('/api/users', async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Validate input
      if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      // Save the user to the database
      const newUser = new User({ name, email, password });
      await newUser.save();
  
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (err) {
      console.error('Error saving user:', err);
      res.status(500).json({ message: 'Failed to create user', error: err.message });
    }
  });