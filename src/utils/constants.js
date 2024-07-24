export const ENV ={
    SERVER_HOST: "http://localhost:1337",
    API_URL: "http://localhost:1337/api",
    ENDPOINTS: {
        AUTH: {
            REGISTER: "auth/local/register",
            LOGIN: "auth/local"
        },
        USER: {
            GETME: "users/me",
            UPDATEME: "users"
        },
        CATEGORIES :{
            GETALL: "categories"
        },
        ADDRESS :{
            GETALL: "addresses"
        }
    },
    TOKEN: "token"
}