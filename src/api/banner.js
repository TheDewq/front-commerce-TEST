import { ENV } from "@/utils";

export class banner{
    async getOne(){
        try {
            const populate = "populate=*"

            const url = ENV.API_URL+"/"+ENV.ENDPOINTS.BANNER.GETONE+"?"+populate

            const response = await fetch(url)
            const result = await response.json();
            if(response.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error;
        }
    }
}