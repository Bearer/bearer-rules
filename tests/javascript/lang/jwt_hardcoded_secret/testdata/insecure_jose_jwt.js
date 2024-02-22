import * as jose from 'jose'

const secret = "my-hardcoded-secret"

// bearer:expected javascript_lang_jwt_hardcoded_secret
const jwt = await new jose.SignJWT({ 'urn:example:claim': true })
  .setIssuedAt()
  .setExpirationTime('2h')
  .sign(secret)

// bearer:expected javascript_lang_jwt_hardcoded_secret
const jwt2 = await (new jose.SignJWT()).sign(secret)

console.log(jwt)
