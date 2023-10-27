import { User } from '@prisma/client';


export function mapUserStats(users: User[]){
   return users.reduce((acc, curr) => {
      acc.users++
      acc.roleBreakdown[curr.role]++ 
      return acc
   }, {users: 0, roleBreakdown: {ADMIN: 0, PEOPLE_LEAD: 0, USER: 0, GUEST: 0}})
}