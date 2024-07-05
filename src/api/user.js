import { authFetch, ENV } from "@/utils";

export class User{
    async getMe(){
        try {
            const url = ENV.API_URL+"/"+ENV.ENDPOINTS.USER.GETME;
            const method = "GET";

            const response = await authFetch(url, method);
            const result = await response.json();

            if(response.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error
        }
    }
}