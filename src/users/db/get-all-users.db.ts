import { getPrismaClient } from '../../../prisma';

export async function getAllUsers() {
   return getPrismaClient().user.findMany();
}