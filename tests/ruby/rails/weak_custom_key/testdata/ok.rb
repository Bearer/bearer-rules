class User < ApplicationRecord
  encrypts :email, :billing_number, key: "a-string-longer-than-12-bytes"
end