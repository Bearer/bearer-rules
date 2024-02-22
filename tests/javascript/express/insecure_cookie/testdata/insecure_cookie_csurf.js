import csurf from "csurf"

export const csrfOptions = {
  domain: process.env.COOKIE_DOMAIN || "localhost",
  sameSite: "strict",
  secure: false,
}

export default function getCsurf() {
// bearer:expected javascript_express_insecure_cookie
  const protection = csurf({
    cookie: { ...csrfOptions, httpOnly: true },
    // cookie: { secure: false, httpOnly: true },
  })
  return function csrf(req, res, next) {
    // add the middleware
    protection(req, res, next)
  }
}
