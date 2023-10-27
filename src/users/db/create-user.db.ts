import { getPrismaClient } from '../../../prisma';
import { UserDetails } from '../types';

export async function createUser({ email, name }: UserDetails) {
   const user = await getPrismaClient().user.create({
      data: {
         email,
         name,
         role: "USER"
      },
      select: {
         id: true
      }
   })
   return user.id;
}