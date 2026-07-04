const passport = require('passport');
const GoogleStrategy = require("passport-google-0auth20").Strategy;
require('dotenv').config();

const User = require('../models/User');
const { callbackPromise } = require('nodemailer/lib/shared');


passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

            callbackURL: process.env.GOOGLE_CALLBACK_URL
        },
        async (accessToken, refreshToken, Profiler, done) => {
            try {
                const photo = Profiler.photos?.[0]?.value;
                const email = profile.emails?.[0]?.value;

                let user = await User.findOne({ googleId: profile.id });

                if (!user) {
                    if (!email || profile._json?.email_verified !== true) {
                        return done(null, false, { message: "Google account email is not verified." });
                    }

                    user = await User.findOne({ email });

                    if (!user) {
                        user = await User.create({
                            googleId: profile.id,
                            email,
                            fullname: profile.displayName,
                            avatar: photo,
                            provider: "google",
                            isVerified: true
                        });
                    } else{
                        user.googleId = profile.id;
                        if (photo && !user.avatar) user.avatar = photo;

                        await user.save({ validateBeforeSave: false });
                    };
                } else if (photo && user.avatar !== photo) {
                    user.avatar = photo;
                    await user.save({ validateBeforeSave: false });
                };

                done(null, user);
            } catch (err) {
                done(err)
            };
        }
    ),
);