metadata = {
  user_email: current.email,
  user_id: 9000,
  auth_level: "admin"
}

# bearer:expected ruby_third_parties_bugsnag
Bugsnag.leave_breadcrumb('User logged in', metadata, Bugsnag::BreadcrumbType::USER)