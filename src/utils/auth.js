import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./connect"


export const authOptions={
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET,
          callbackUrl: "http://localhost:3000/api/auth/callback/google",
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
          }),
        // ...add more providers here
      ],
}