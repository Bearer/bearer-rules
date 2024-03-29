const { Analytics } = require('@segment/analytics-node')
const analytics = new Analytics({ write_key: 'some-write-key' });

var user = getCurrentUser();
// bearer:expected javascript_third_parties_segment
analytics.identify({
  userId: user.id,
  traits: {
    name: user.fullName,
    email: user.emailAddress,
    plan: user.businessPlan,
    friends: user.friendCount
  }
});

import { AnalyticsBrowser } from '@segment/analytics-next'
const browser = AnalyticsBrowser.load({ writeKey: 'write-key' })

// bearer:expected javascript_third_parties_segment
browser.identify(user.email)