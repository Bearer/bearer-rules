import { CryptoJS } from "crypto-js"

// bearer:expected javascript_lang_weak_encryption_rc4
CryptoJS.RC4.encrypt(user.email, "secret key");
