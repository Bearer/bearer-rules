# bearer:expected ruby_rails_permissive_regex_validation
validates :attr, format: { with: /^oops$/ }
# bearer:expected ruby_rails_permissive_regex_validation
validates :attr, format: { with: %r[oops] }
# bearer:expected ruby_rails_permissive_regex_validation
validates :attr, format: { with: "\Aoops" }
# bearer:expected ruby_rails_permissive_regex_validation
validates :attr, format: { with: /oops\z/ }

# bearer:expected ruby_rails_permissive_regex_validation
validates_format_of :attr, with: '^oops$'
