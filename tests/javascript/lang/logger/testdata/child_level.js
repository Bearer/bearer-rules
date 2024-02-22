const ctx = {
	user: {
		email: "foo@example.com",
	},
};

// bearer:expected javascript_lang_logger
logger.child(ctx).info(user.name);
