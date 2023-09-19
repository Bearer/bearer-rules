expressJwt({ secret: "" + Math.random() })
export const denyAll = () => expressjwt({ secret: "" + Math.random() } as any)
