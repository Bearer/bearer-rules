Sentry.configureScope((scope) => {
// bearer:expected javascript_third_parties_sentry
	scope.setExtra("email", user.email);
});
