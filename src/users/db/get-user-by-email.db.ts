import { getPrismaClient } from '../../../prisma';

export async function getUserWithBookingsByEmail(email: string) {
   return getPrismaClient().user.findUnique({
      where: {
         email
      }
   });
}