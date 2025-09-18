require('dotenv').config();
const passport=require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:"http://localhost:3000/api/auth/google/callback"
  },
    async (accessToken, refreshToken, profile, done) => {
    try {
      return done(null, profile); 
    } catch (error) {
      return done(error, null);
    }
  }
 
));

passport.serializeUser(function(user,done){
    done(null,user)
})

passport.deserializeUser(function(user,done){
    done(null,user)
})

