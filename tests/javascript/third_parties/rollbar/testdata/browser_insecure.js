const user = { name: "jhon", email: "jhon@gmail.com" };

// bearer:expected javascript_third_parties_rollbar
Rollbar.critical("Connection error from remote Payments API", user);
