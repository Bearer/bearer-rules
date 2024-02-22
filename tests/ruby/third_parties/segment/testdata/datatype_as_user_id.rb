analytics = Segment::Analytics.new(write_key: "ABC123F")
# bearer:expected ruby_third_parties_segment
analytics.alias(user_id: user.email, previous_id: "some id")