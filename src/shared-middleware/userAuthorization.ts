import { Context, Next } from 'koa';

export const authorizeUser = async (ctx: Context, next: Next) => {
   const authHeader = ctx.headers.authorization;
   const [email, name, role] = authHeader?.split('|') || ["", "", ""];
   if (!email) {
      ctx.throw(403)
   }
   ctx.state.userDetails = { email, name, role }

   await next();
}