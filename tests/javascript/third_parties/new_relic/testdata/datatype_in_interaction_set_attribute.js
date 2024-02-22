const newrelic = require("newrelic")

router.addRoute("/order", () => {
  const user = getCurrentUser();
// bearer:expected javascript_third_parties_new_relic
  newrelic.interaction()
    .setAttribute("username", user.first_name)
    .setAttribute("postal-code", user.post_code);
  renderCart(user);
});

// alternative syntax
var interaction = newrelic.interaction()
// bearer:expected javascript_third_parties_new_relic
interaction.setAttribute("email", user.email_address)