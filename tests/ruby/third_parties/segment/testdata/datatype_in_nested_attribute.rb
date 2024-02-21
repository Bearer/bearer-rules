analytics = Segment::Analytics.new(write_key: "ABC123F")
# bearer:expected ruby_third_parties_segment
analytics.track(user_id: user.id, event: "account sign in", context: { ip: user.ip_address })