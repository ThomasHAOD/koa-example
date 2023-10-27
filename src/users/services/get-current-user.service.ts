import { Next, Context } from 'koa';
import { getUserWithBookingsByEmail } from '../db';

export async function getCurrentUserService(ctx: Context, next: Next) {
   const userEmail = ctx.state.userDetails.email;
   const user = await getUserWithBookingsByEmail(userEmail);
   if (!user) {
      ctx.throw(404);
   }
   ctx.response.body = user;
   await next();
}