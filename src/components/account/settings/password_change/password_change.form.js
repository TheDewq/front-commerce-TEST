import * as Yup from "yup";


export function initialValues(){
    return{
        password: "rtyerty",
        passwordConfirmation: ""
    }
}

export function validationSchema(){
    return Yup.object({
        password: Yup.string().required(true),
        passwordConfirmation: Yup.string().required(true).oneOf([Yup.ref("password"),null],true)
    })
}