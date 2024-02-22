const GoogleStrategy = require("passport-google-oauth").Strategy;
const passport = require("passport");

const strategy = new GoogleStrategy({ clientSecret: "hardcodedSecret" });
// bearer:expected javascript_third_parties_passport_hardcoded_secret
passport.use(strategy);
