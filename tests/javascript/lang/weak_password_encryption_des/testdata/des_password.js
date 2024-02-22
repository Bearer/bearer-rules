import { CryptoJS } from "crypto-js"

// bearer:expected javascript_lang_weak_password_encryption_des
CryptoJS.DES.encrypt(user.password, "secret key");
