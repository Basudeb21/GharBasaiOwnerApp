import React, { createContext, useState, useEffect } from 'react';
import { GetLoginHelp } from '../../local-store';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userSession, setUserSession] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkLogin = async () => {
            const session = await GetLoginHelp();
            setUserSession(session);
            setIsLoading(false);
        };

        checkLogin();
    }, []);

    const login = (session) => {
        setUserSession(session);
    };

    const logout = () => {
        setUserSession(null);
    };

    return (
        <AuthContext.Provider value={{ userSession, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
