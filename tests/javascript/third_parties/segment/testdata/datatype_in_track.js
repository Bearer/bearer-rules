import { Analytics } from '@segment/analytics-node'

const client = new Analytics({ write_key: 'some-write-key' });

// bearer:expected javascript_third_parties_segment
client.track({
  event: "some event name",
  userId: user.id,
  userIpAddr: user.ip_address,
});



import { AnalyticsBrowser } from "@segment/analytics-next"
const browser = AnalyticsBrowser.load({ writeKey: 'write-key' })

document.body?.addEventListener('click', () => {
// bearer:expected javascript_third_parties_segment
  browser.track(user.email)
})