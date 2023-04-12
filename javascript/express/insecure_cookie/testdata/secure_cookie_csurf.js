import csurf from "csurf"

export const csrfOptions = {
  domain: process.env.COOKIE_DOMAIN || "localhost",
  sameSite: "strict",
  secure: process.env.FREECODECAMP_NODE_ENV === "production",
}

export default function getCsurf() {
  const protection = csurf({
    cookie: { ...csrfOptions, httpOnly: true },
  })
  return function csrf(req, res, next) {
    // add the middleware
    protection(req, res, next)
  }
}
