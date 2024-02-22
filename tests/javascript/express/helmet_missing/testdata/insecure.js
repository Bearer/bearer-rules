const ex = require("express")
const cors = require("cors")

// bearer:expected javascript_express_helmet_missing
const a = ex()
a.use(express.json())
a.use(cors())

app.disable("x-powered-by")
