import { ENV } from "@/utils";

export class User{
    async getMe(token){
        try {
            const url = ENV.API_URL+"/"+ENV.ENDPOINTS.USER.GETME;
            const params = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+token
                }
            };

            const responde = await fetch(url, params);
            const result = await responde.json();

            if(responde.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error
        }
    }
}