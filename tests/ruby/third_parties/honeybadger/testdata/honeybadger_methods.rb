class User < ApplicationRecord
# bearer:expected ruby_third_parties_honeybadger
  def to_honeybadger_context
    { user: { id: id, email: email } }
  end
end