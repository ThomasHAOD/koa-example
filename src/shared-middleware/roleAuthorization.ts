import { Context, Next } from 'koa';

export const authorizeRole = (allowedRoles: string[]) => async (ctx: Context, next: Next) => {
   const userRole = ctx.state.userDetails.role;
   console.log({ userRole, allowedRoles });
   console.log(ctx.state.userDetails);


   if (userRole !== 'ALL' && !allowedRoles.includes(userRole)) {
      ctx.throw(403);
   }

   await next();
}