import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from './lib/mongodb'
import GitHubProvider from "next-auth/providers/github";
export default NextAuth({
  adapter :MongoDBAdapter(clientPromise),

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    
  ], 
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
 
  secret: process.env.JWT_SECRET,
});