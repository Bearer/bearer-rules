const user = { email: "jhon@gmail.com " };
// bearer:expected javascript_react_google_analytics
ReactGA.event({
	category: "user",
	action: "logged_in",
	value: user.email,
});
