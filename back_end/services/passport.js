const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const User = require('../models/user.model')


const getAllUsers = async () => {
    try {
      const users = await User.find().exec();
      return users;
    } catch (error) {
      console.error(error);
      throw error;
    };
  };

passport.use(new LocalStrategy({
    usernameField:'email'},
    async (email, password, done)=>{
        try {
            const user = await User.findOne({email});
            if(!user){
                return done(null, false, {error:'Incorrect email or password'});
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if(!isMatch){
                return done(null, false, {error:'Incorrect email or password'})
            }

            done(null, user);
        } catch (error) {
           done(error) 
        }
    }
));

passport.serializeUser((user,done) =>{
    done(null, user._id);
});

passport.deserializeUser( async (userId, done)=>{
    try {
        const user = await User.findOne({ _id: userId });

        if(!user){
            return done(new Error('User not found'));
        }
        done(null, user);
    } catch (error) {
        return done(error);
    }
});