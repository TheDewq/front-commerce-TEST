"use client"
import { createContext, useState, useEffect } from "react";


export const AuthContext = createContext();

export function AuthProvider(props){
    const { children } = props;
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(false);
    }, []);

    const login = async (token) => {
        try {
            console.log(token);
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }

    const data = {
        accessTokeN : token,
        user,
        login: null,
        logout: null,
        updateUser: null
    };

    if(loading) return null;

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
} 