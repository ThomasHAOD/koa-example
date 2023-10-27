import { Next, Context } from 'koa';
import { getAllUsers } from '../db';
import { mapUserStats } from '../mappings/map-user-stats';

export async function getUserStatsService(ctx: Context, next: Next) {
   const users = await getAllUsers();
   if (!users.length) {
      ctx.state.logger.logError('No users exist');
      ctx.throw(404);
   }
   const userStats = mapUserStats(users);
   ctx.response.body = userStats;
   ctx.status = 200;

   await next();
}