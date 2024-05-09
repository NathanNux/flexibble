import NextAuth from "next-auth/next";

import { authOptions } from "@/lib/session";

const handler = NextAuth(authOptions);

export { handler as Get, handler as Post }

// this will allow making a GET and POST request with Next Auth native API