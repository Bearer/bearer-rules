class User < ApplicationRecord
  has_secure_password
# bearer:expected ruby_rails_password_length
  validates :password, length: { minimum: 6 }
end