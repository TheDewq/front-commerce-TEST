import { authFetch, ENV } from "@/utils";
import { method } from "lodash";

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

    async updateMe(data,id){
        try {
            const url = ENV.API_URL+"/"+ENV.ENDPOINTS.USER.UPDATEME+"/"+id;
            console.log("la url es "+url)
            const method = "PUT";
            const params = {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }    
            const response = await authFetch(url, method, params);
            const result = await response.json();

            if(response.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error;
        }
        


    }
}