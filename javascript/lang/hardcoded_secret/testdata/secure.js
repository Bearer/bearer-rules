const config = {};
config.clientSecret = process.env["GOOGLE_CLIENT_SECRET"];

crypto.createHmac('sha256', process.env["SECRET"], { encoding: "utf-8" })

crypto.createSecretKey(process.env["SECRET"], "utf-8")

crypto.createPrivateKey(process.env["SECRET"])

crypto.privateDecrypt({ key: process.env["SECRET"] }, buffer)

crypto.privateEncrypt({ passphrase: process.env["SECRET"] }, buffer)

const s = crypto.createSign('RSA-SHA256')
s.sign(process.env["SECRET"], "utf-8")

const apiKey = "**"
o.password = "***"
const foo = { password: "••" }
