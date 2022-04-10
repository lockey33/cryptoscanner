// Authentication with metamask to be able to take payments in the futur ...

import { createContext, useContext, ReactNode, useState } from "react";

type authContextType = {
    user: object;
    login: (userData: object) => void;
    logout: () => void;
};

const authContextDefaultValues: authContextType = {
    user: {},
    login: () => {},
    logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<object>({});


    const login = (userData: object) => {
        console.log(userData)
        setUser(userData);
    };

    const logout = () => {
        setUser({});
    };

    const value = {
        user,
        login,
        logout,
    };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}