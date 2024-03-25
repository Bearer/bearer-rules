package main

import "google.golang.org/api/dataflow/v1b3"

func main() {
	service, err := dataflow.NewService(ctx)

	// bearer:expected go_third_parties_google_analytics
	job := dataflow.Job{Name: user.email}
	job = dataflow.Job{Name: user.id}

	// bearer:expected go_third_parties_google_analytics
	job.Name = user.email
	job.Name = user.id

	// bearer:expected go_third_parties_google_analytics
	service.Projects.Jobs.Create(user.email, job)
	service.Projects.Jobs.Create(user.id, job)
}
