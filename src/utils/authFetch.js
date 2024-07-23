import { Token } from "@/api";

export async function authFetch(url, method, params){
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
            const tempParams = {
                "method": method,
                "headers": {
                    "Authorization": `Bearer ${token}`,
                    ...params?.headers
                },
                ...params?.body
            }
            return await fetch(url, tempParams)
        }
    }
}