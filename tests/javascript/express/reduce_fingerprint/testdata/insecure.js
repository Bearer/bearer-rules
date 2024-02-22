const express = require("express")
const cors = require("cors")

// bearer:expected javascript_express_reduce_fingerprint
const app = express()
app.use(express.json())
app.use(cors())
