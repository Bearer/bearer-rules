import { Bugsnag } from "@bugsnag/js"

var bugSession = Bugsnag.startSession()
// bearer:expected javascript_third_parties_bugsnag
bugSession.notify(user.email)