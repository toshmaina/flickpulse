/* "use client"

import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { FC as FunctionalComponent } from "react";
const AuthProvider: FunctionalComponent<SessionProviderProps> = ({ children }: SessionProviderProps) =>
(
        <SessionProvider>
        {children}
        </SessionProvider>
    )

  


export default AuthProvider;
 */