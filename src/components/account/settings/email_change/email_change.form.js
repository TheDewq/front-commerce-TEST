import * as Yup from "yup";


export function initialValues(){
    return{
        email: "",
        emailConfirmation: ""
    }
}

export function validationSchema(){
    return Yup.object({
        email: Yup.string().email(true).required(true),
        emailConfirmation: Yup.string().required(true).email(true).oneOf([Yup.ref("email"),null],true)
    })
}