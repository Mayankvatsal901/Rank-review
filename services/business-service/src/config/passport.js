const passport = require("passport");
const GoogleStrategy =
require("passport-google-oauth20").Strategy;

const Business =
require("../models/business");

passport.use(

new GoogleStrategy(

{

clientID:
process.env.GOOGLE_CLIENT_ID,

clientSecret:
process.env.GOOGLE_CLIENT_SECRET,

callbackURL:
`${process.env.API_GATEWAY_URL}/api/business/google/callback`

},

async (
accessToken,
refreshToken,
profile,
done
)=>{

try{

let business =
await Business.findOne({

email:
profile.emails[0].value

});

if(!business){

business =
await Business.create({

name:
profile.displayName,

email:
profile.emails[0].value,

googleId:
profile.id,

authProvider:
"google",

profileCompleted:false

});

}

return done(null,business);

}
catch(error){

return done(error,null);

}

}

)

);