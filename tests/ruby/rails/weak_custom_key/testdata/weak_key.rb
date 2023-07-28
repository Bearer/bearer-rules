class User < ApplicationRecord
  encrypts :email, :billing_number, key: "short"
end