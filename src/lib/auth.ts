//import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import { AuthOptions } from 'next-auth'
import prisma from '@/lib/prisma'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  //adapter: PrismaAdapter(await import("@/lib/prisma").then(mod => mod.default)),
  // Se ainda der erro, teste com lazy loading:
  //adapter: PrismaAdapter((() => {
  //  const { default: prisma } = require('@/lib/prisma');
  //  return prisma;
  //})()),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  session: {
    strategy: "database", // Use database quando tiver adapter
    //strategy: "jwt", // Use JWT sem adapter
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user = { ...session.user, id: user.id } as {
        id: string,
        name: string;
        email: string;
      }

      console.log('Session callback - session:', session)
      console.log('Session callback - user:', user)
      // if (session.user) {
      //   session.user.id = user.id
      // }
      return session
    }
  }
}