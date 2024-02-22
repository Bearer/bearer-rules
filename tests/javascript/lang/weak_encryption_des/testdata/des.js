import { CryptoJS } from "crypto-js"

// bearer:expected javascript_lang_weak_encryption_des
var hash = CryptoJS.DES.encrypt(user.email, "secret key");
