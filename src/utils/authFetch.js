import { Token } from "@/api";

export async function authFetch(url, method){
    const TokenCtrl = new Token();
    const token = TokenCtrl.getToken();
    console.log(token);
    const logout = ()=>{
        TokenCtrl.removeToken();
        window.location.replace("/")
    }
    if(!token){
        logout();
    }else{
        if(TokenCtrl.hasExpired(token)){
            logout();
        }else{
            const params = {
                "method": method,
                "headers": {
                    "Authorization": `Bearer ${token}`
                }
            }
            return await fetch(url, params)
        }
    }
}