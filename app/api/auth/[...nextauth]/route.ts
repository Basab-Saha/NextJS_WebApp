import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

// the most important part is : .env file should be in top level (same level as of public,pacakge.json)

const authOptions:AuthOptions={
    providers:[

        GithubProvider({
            clientId:process.env.GITHUB_CLIENT_ID as string,
            clientSecret:process.env.GITHUB_CLIENT_SECRET as string,
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
           
        }),
    ],
    pages:{
        signIn:'/sign-in'
    },
    secret:process.env.NEXTAUTH_SECRET ,
}

const handler=NextAuth(authOptions);

export {handler as GET , handler as POST}