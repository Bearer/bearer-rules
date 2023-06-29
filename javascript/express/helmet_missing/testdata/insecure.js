const ex = require("express")
const cors = require("cors")

const a = ex()
a.use(express.json())
a.use(cors())

app.disable("x-powered-by")
