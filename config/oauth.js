require('dotenv').config();
const passport=require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:"http://localhost:3000/api/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
      return cb(err, user);  
  }
));

passport.serializeUser(function(user,done){
    done(null,user)
})

passport.serializeUser(function(user,done){
    done(null,user)
})

