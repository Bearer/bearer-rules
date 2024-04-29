const express = require('express')
const Customer = require('../models/customer')
const User = require('db/user')

const app = express()

app.post('/bad', async (req, res, _next) => {
    // bearer:expected javascript_express_nosql_injection
    let user = new User(req.body)
    await user.save()

    let { username, password } = req.body
    // bearer:expected javascript_express_nosql_injection
    Customer.findOne({ username, password })
    // bearer:expected javascript_express_nosql_injection
    let customer = Customer.findOne({ username: req.body.username, password: req.body.password })

    return res.json(user, customer)
})

app.post('/ok', async (req, res, _next) => {
  let { username, password } = req.body
  // toString() sanitization
  let customer = Customer.findOne({ username: username.toString(), password: password.toString() })
  return res.json(customer)
})
