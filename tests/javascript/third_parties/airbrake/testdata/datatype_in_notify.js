const { Notifier } = require('@airbrake/node');

const airbrake = new Notifier({
  projectId: 42,
  projectKey: 'some-project-key',
  environment: 'PROD',
});

// bearer:expected javascript_third_parties_airbrake
let promise = airbrake.notify("user " + currentUser().emailAddress)
promise.then(() => {})

riskyCode(() => {
  try {
    // something risky
  } catch (err) {
// bearer:expected javascript_third_parties_airbrake
    airbrake.notify({
      error: err,
      params: { user: user.ipAddress },
    });
  }
})