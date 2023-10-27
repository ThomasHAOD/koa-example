import Router from '@koa/router';
import { authorizeRole } from '../shared-middleware';
import { getAllUsersService, getUserStatsService, getCurrentUserService, createUserService } from './services';
import { validateCreateUserBody } from './middleware';

const userRouter = new Router({ prefix: '/users' });

userRouter.get(
  '/',
  authorizeRole(['ADMIN', 'PEOPLE_LEAD']),
  getAllUsersService
);
userRouter.get(
  '/me',
  authorizeRole(['USER', 'PEOPLE_LEAD', 'ADMIN']),
  getCurrentUserService
);
userRouter.get(
  '/stats',
  authorizeRole(['ALL']),
  getUserStatsService
);
userRouter.post(
  '/',
  authorizeRole(['ADMIN', 'PEOPLE_LEAD']),
  validateCreateUserBody,
  createUserService
);

export { userRouter };
