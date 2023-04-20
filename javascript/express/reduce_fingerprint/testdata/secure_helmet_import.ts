import helmet, {
  contentSecurityPolicy,
  crossOriginEmbedderPolicy,
  crossOriginOpenerPolicy,
  crossOriginResourcePolicy,
  dnsPrefetchControl,
  frameguard,
  hidePoweredBy,
  hsts,
  ieNoOpen,
  noSniff,
  originAgentCluster,
  permittedCrossDomainPolicies,
  referrerPolicy,
  xssFilter,
} from "helmet"

import { Express } from "express"

export const addHelmet = (app: Express) => {
  app.use(helmet())
  app.use(hidePoweredBy())
}

const bootstrapServer = async () => {
  const expressApp = express()
  addHelmet(expressApp)
}
