// here we will keep all the data about the current user in the current session

import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import Google from "next-auth/providers/google";
import jsonwebtoken from "jsonwebtoken";

import { JWT } from "next-auth/jwt";
import { SessionInterface } from "@/common.types";

export const authOptions: NextAuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    jwt: {
        encode: ({ token, secret }) => {
            
        },
        decode: async ({ token, secret }) => {

        }
    },
    theme: {
        colorScheme: 'light',
        logo: '/logo.png'
    },
    callbacks: {
        async session({ session }) {
            return session
        },
        async signIn({ user }: { user: AdapterUser | User}) {
            try {
                // get the user if they exist 
                
                // if they don't exist, create a new user

                // return the user
                return true
            } catch (error) {
                console.error(error)
                return false
            }
        }
    }
}

export async function getCurrentUser() {
    const session = await getServerSession(authOptions) as SessionInterface;
    return session
}