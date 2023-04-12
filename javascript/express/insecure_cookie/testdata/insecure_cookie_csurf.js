import csurf from "csurf"

export const csrfOptions = {
  domain: process.env.COOKIE_DOMAIN || "localhost",
  sameSite: "strict",
  secure: false,
}

export default function getCsurf() {
  const protection = csurf({
    cookie: { ...csrfOptions, httpOnly: true },
    // cookie: { secure: false, httpOnly: true },
  })
  return function csrf(req, res, next) {
    // add the middleware
    protection(req, res, next)
  }
}
