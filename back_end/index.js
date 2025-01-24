const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const session = require('express-session');
const bcrypt = require('bcrypt')
const passport = require('passport')
require('./services/passport')

const app = express();

// middleware
app.use(express.json());
app.use(bodyParser.json());
env.config();
app.use(session({
  secret:'music-reviews-secret',
  resave:false,
  saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());



mongoose.connect(
    'mongodb://127.0.0.1:27017/myapp', { 
    }).then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB:', err)
);

const port = process.env.PORT || 5000;


app.listen(port, ()=>{
        console.log(`Server running on port ${port}`)
    });


app.get('/', (req, res)=>{
    res.send("Music Reviews Api")
})


app.post('/register', async (req, res)=>{
  const {name, email,password} = req.body;
  console.log(name,email,password)
  try {
      if(!name || !email || !password){
        return res.status(422).json({error:'Name, email and password are required'})
      }
      if(await User.findOne({email:email})){
        return res.status(409).json({error: 'email already in use'})
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email: email, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({error:'Something went wrong'})
    console.log(error)
  }
});


app.post('/login', async (req,res)=>{
    passport.authenticate('local',(error,user, info) =>{
      if(error){
        return res.status(500).json({error:'Something went wrong'})
      }

      if(!user){
        return res.status(401).json(info)
      }

      req.login(user,(error)=>{
        if (error){
          return res.status(500).json({error:'Something went wrong'})
        }
        return res.status(200).json({id:user._id,  name:user.name, email:user.email} )
      })
    })(req,res)
})

app.get('/profile', (req,res)=>{
  if(req.isAuthenticated()){
    return res.status(200).json({user:req.user})
  }
  res.status(401).json({error:'Unauthorized'})
})

