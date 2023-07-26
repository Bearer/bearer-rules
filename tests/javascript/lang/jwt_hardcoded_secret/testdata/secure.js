
var jwt = require("jsonwebtoken");

var token = jwt.sign({ foo: "bar" }, process.env.JWT_SECRET);

import * as jose from 'jose'

const jwt = await new jose.SignJWT({ 'urn:example:claim': true })
  .setIssuedAt()
  .setExpirationTime('2h')
  .sign(config.secret)

const jwt2 = await (new jose.SignJWT()).sign(config.secret)

console.log(jwt)
