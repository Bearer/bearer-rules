const config = {
	clientID: process.env["GOOGLE_CLIENT_ID"],
// bearer:expected javascript_lang_hardcoded_secret
	clientSecret: "secretHardcodedString",
	callbackURL: "/oauth2/redirect/google",
	scope: ["profile"],
};
