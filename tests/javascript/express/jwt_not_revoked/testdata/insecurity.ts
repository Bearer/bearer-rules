// bearer:expected javascript_express_jwt_not_revoked
expressJwt({ secret: "" + Math.random() })
// bearer:expected javascript_express_jwt_not_revoked
export const denyAll = () => expressjwt({ secret: "" + Math.random() } as any)
