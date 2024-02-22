// bearer:expected javascript_lang_hardcoded_secret
crypto.createHmac('sha256', 'secretHardcodedString', { encoding: "utf-8" })

// bearer:expected javascript_lang_hardcoded_secret
crypto.createSecretKey('secretHardcodedString', "utf-8")

// bearer:expected javascript_lang_hardcoded_secret
crypto.createPrivateKey('secretHardcodedString')

// bearer:expected javascript_lang_hardcoded_secret
crypto.privateDecrypt({ key: 'secretHardcodedString' }, buffer)

// bearer:expected javascript_lang_hardcoded_secret
crypto.privateEncrypt({ passphrase: 'secretHardcodedString' }, buffer)

const s = crypto.createSign('RSA-SHA256')
// bearer:expected javascript_lang_hardcoded_secret
s.sign('secretHardcodedString', "utf-8")
