import { ENV } from "@/utils";
import { authFetch } from "@/utils";

export class Address{
    async getAllbyId(id){
        try {
            const filters = "filters[user][id][$eq]="+id;
            const url = ENV.API_URL+"/"+ENV.ENDPOINTS.ADDRESS.GETALL+"?"+filters

            const method = "GET";

            const response = await authFetch(url, method);
            const result = await response.json();

            if(response.status !== 200) throw result;
            
            return result;
        } catch (error) {
            throw error;
        }
    }
    async createOne(id, data){
        try {
            const url = ENV.API_URL+"/"+ENV.ENDPOINTS.ADDRESS.GETALL

            const method = "POST";
            const params = {
                "data": {
                    "name": data.name,
                    "dir": data.dir,
                    "city": data.city,
                    "department": data.department,
                    "phone1": data.phone1,
                    "phone2": data?.phone2 ?? "",
                    "zipcode": data.zipcode,
                    "Details": data?.Details ?? "",
                    "user": id
                }
            }

            const response = await authFetch(url, method, params);
            const result = await response.json();

            if(response.status !== 200) throw result;
            console.log("este es el resultado");
            console.log(result)
            return result;
        } catch (error) {
            throw error;
        }
    }
}