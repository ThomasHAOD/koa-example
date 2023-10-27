import { Context, Next } from 'koa';
import { createUser } from '../db';
import { UserDetails } from '../types';

export async function createUserService(ctx: Context, next: Next) {
   const userDetails = ctx.body as UserDetails
   const userId = await createUser(userDetails);
   if (!userId){
      ctx.state.logger.logError(`User creation failed`);
      ctx.throw();
   }
}