import { Analytics } from "@segment/analytics-node"

const prodAnalytics = new Analytics({ writeKey: "product-write-key" });
const appAnalytics = new Analytics({ writeKey: "application-write-key" });

var user = getCurrentUser();
// bearer:expected javascript_third_parties_segment
appAnalytics.alias({
  previousId: user.email,
  userId: user.id,
});
