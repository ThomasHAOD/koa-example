import { User } from '@prisma/client';

export type UserDetails = Pick<User, "email" | "name">