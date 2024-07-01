import * as Yup from "yup";

export function initialValues(){
    return{
        email: "",
        username: "",
        password: "",
        confirm_password: ""
    }
}

export function validationSchema(){
    return Yup.object({
        email: Yup.string().email(true).required(true),
        username: Yup.string().email(true).required(true).oneOf([Yup.ref("email"),null],true),
        password: Yup.string().required(true),
        confirm_password: Yup.string().required(true).oneOf([Yup.ref("password"),null],true)
    })
}