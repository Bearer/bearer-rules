const express = require("express")

import { contentSecurityPolicy } from "helmet"

const app = express()
app.use(contentSecurityPolicy())
