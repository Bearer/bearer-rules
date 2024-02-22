import { Analytics } from '@segment/analytics-node'

const analytics = new Analytics({ writeKey: 'my-write-key' });

var customer = getCurrentUser();
// bearer:expected javascript_third_parties_segment
analytics.page({
  userId: customer.id,
  category: "Shopping Cart",
  properties: {
    path: "/cart/"+customer.bank_account_number
  },
});