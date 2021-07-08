import { Router } from 'express'

import { itemRouter } from './item.mjs'

const apiRouter = Router()

apiRouter.use('/item', itemRouter)

export { apiRouter }
