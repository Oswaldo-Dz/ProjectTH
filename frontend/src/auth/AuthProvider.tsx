import { useContext, createContext, useState, useEffect } from "react";



// export const AuthContext = createContext({
//     isAuthenticated: false,
// });

interface AuthProviderProps{
    children: React.ReactNode;
}

export const AuthContext = createContext<{ isAuthenticated: boolean; setIsAuthenticated: (isAuthenticated: boolean) => void }>(
    { isAuthenticated: false, setIsAuthenticated: () => {} },
  );

export function AuthProvider({children}: AuthProviderProps){
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () => useContext(AuthContext);