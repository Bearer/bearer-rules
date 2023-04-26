crypto.createHmac('sha256', 'secretHardcodedString', { encoding: "utf-8" })

crypto.createSecretKey('secretHardcodedString', "utf-8")

crypto.createPrivateKey('secretHardcodedString')

crypto.privateDecrypt({ key: 'secretHardcodedString' }, buffer)

crypto.privateEncrypt({ passphrase: 'secretHardcodedString' }, buffer)

const s = crypto.createSign('RSA-SHA256')
s.sign('secretHardcodedString', "utf-8")
