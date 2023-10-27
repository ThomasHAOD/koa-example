import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

const users: Pick<User, 'email' | "name" | "role">[] = [
   { name: 'Tam', email: 'tam@eg.com', role: 'ADMIN' },
   { name: 'Tom', email: 'tom@eg.com', role: 'PEOPLE_LEAD' },
   { name: 'Tim', email: 'tim@eg.com', role: 'USER' },
   { name: 'Tem', email: 'tem@eg.com', role: 'USER' },
   { name: 'Tum', email: 'tum@eg.com', role: 'GUEST' },
];

users.forEach((user) => {
   prisma.user.create({
      data: {
         ...user
      }
   })
});
async function main() {
   const tam = await prisma.user.upsert({
      where: { email: 'tam@eg.com' },
      update: {},
      create: { name: 'Tam', email: 'tam@eg.com', role: 'ADMIN' },
   })
   const tom = await prisma.user.upsert({
      where: { email: 'tom@eg.com' },
      update: {},
      create: { name: 'Tom', email: 'tom@eg.com', role: 'PEOPLE_LEAD' },
   })
   const tim = await prisma.user.upsert({
      where: { email: 'tim@eg.com' },
      update: {},
      create: { name: 'Tim', email: 'tim@eg.com', role: 'USER' },
   })
   const tem = await prisma.user.upsert({
      where: { email: 'tem@eg.com' },
      update: {},
      create: { name: 'Tem', email: 'tem@eg.com', role: 'USER' },
   })
   const tum = await prisma.user.upsert({
      where: { email: 'tum@eg.com' },
      update: {},
      create: { name: 'Tum', email: 'tum@eg.com', role: 'GUEST' },
   })

   console.log({ tam, tim, tem, tum, tom })
}
main()
   .then(async () => {
      await prisma.$disconnect()
   })
   .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
   })