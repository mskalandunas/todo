import { Router } from 'express';

import { viewController } from './controller';

export const viewRouter = Router().get('/', viewController);
