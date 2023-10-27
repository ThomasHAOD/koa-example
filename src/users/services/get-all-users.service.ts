import { Next, Context } from 'koa';
import { getAllUsers } from '../db';

export async function getAllUsersService(ctx: Context, next: Next){
   const users = await getAllUsers();
   if(!users.length){
      ctx.throw(404);
   }
   ctx.response.body = users;
   await next();
}