"use client"
import { createContext, useState, useEffect } from "react";
import {Token, User} from "@/api"

export const AuthContext = createContext();

const TokenCtrl = new Token();
const UserCtrl = new User();

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
            TokenCtrl.setToken(token);
            const response = await UserCtrl.getMe();
            setUser(response);
            console.log("caballeros, con ustedes "+user);
            setToken(token)
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }

    const data = {
        accessToken : token,
        user,
        login,
        logout: null,
        updateUser: null
    };

    if(loading) return null;

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
} 