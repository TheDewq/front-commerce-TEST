"use client";
import { Token } from "@/api";
import { useRouter } from "next/navigation"
export default () => {
    const router = useRouter();
    const TokenCtrl = new Token();
    const logout = ()=>{
        TokenCtrl.removeToken();
    }
    logout();
    alert("saliendo de la sesion...")
    router.push("/")
}