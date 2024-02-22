import { CryptoJS } from "crypto-js"

// bearer:expected javascript_lang_weak_password_encryption_rc4
var hash = CryptoJS.RC4.encrypt(user.password, "secret key");
