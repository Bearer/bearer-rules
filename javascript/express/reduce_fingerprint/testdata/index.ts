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
const expressApp = express()

export const addHelmet = (app: Express) => {
  app.use(helmet())
  app.use(contentSecurityPolicy())
  app.use(crossOriginEmbedderPolicy())
  app.use(crossOriginOpenerPolicy())
  app.use(crossOriginResourcePolicy())
  app.use(dnsPrefetchControl())
  app.use(frameguard())
  app.use(hidePoweredBy())
  app.use(hsts())
  app.use(ieNoOpen())
  app.use(noSniff())
  app.use(originAgentCluster())
  app.use(permittedCrossDomainPolicies())
  app.use(referrerPolicy())
  app.use(xssFilter())
}

addHelmet(expressApp)
