const Honeybadger = require("@honeybadger-io/js");

let context = { user: { email: "jhon@gmail.com" } };

// bearer:expected javascript_third_parties_honeybadger
Honeybadger.setContext(context);
