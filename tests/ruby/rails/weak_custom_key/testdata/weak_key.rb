class User < ApplicationRecord
# bearer:expected ruby_rails_weak_custom_key
  encrypts :email, :billing_number, key: "short"
end