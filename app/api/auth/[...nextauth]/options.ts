import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProviders from "next-auth/providers/github";



export const options: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GitHubProviders({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                 label: "Name",
                type:"text",
                placeholder: "Enter your username", 
                },  
                password: {
                   label: "Password",
                type:"password",
                placeholder: "Enter your password",   
                },
            },
            async authorize(credentials) {
                //This is where you need to retrieve the user data from the database to verify with the credentials
                const user: {
                    id: string;
                    name: string;
                    password: string;
                } = {
                    id: '2',
                    name: "James Smith",
                    password: "Dave"
                };
             if (credentials?.username === user.name && credentials?.password === user.password) {
                 return user;
                } else {
                    return null;
                };
          
                
            }
            
        },
        )    
        
    ]
    
   // pages: [],
}