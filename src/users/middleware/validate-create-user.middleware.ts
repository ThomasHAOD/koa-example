import { Next, Context } from 'koa';
import { UserDetails } from '../types';

export async function validateCreateUserBody(ctx: Context, next: Next){
   const userDetails = ctx.request.body as UserDetails;
   const invalidFields = [];

   if(!userDetails.name){
      invalidFields.push('name')
   }

   if(!userDetails.email){
      invalidFields.push('email')
   }

   if(invalidFields.length){
      ctx.state.logger.logError(`Error creating user. Invalid fields" ${invalidFields.toString()}`)
      ctx.status = 400;
      return;
   }
   
   await next();
}