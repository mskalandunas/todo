import { Router } from 'express'

import { apiRouter } from './api/index.mjs'
import { viewRouter } from './views/index.mjs'

const baseRouter = Router()

baseRouter.use('/', viewRouter).use('/api', apiRouter)

export { baseRouter }
