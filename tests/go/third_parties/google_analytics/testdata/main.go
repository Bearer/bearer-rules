package main

import "google.golang.org/api/analytics/v3"

func main() {
	service, err := analytics.NewService(ctx)

	// bearer:expected go_third_parties_google_analytics
	ref := analytics.UserRef{Email: user.email}
	ref = analytics.UserRef{Email: user.id}

	// bearer:expected go_third_parties_google_analytics
	ref.Email = user.email
	ref.Email = user.id

	// bearer:expected go_third_parties_google_analytics
	service.Management.AccountUserLinks.Insert(user.email, link)
	service.Management.AccountUserLinks.Insert(user.id, link)
}
