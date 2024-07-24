import * as Yup from "yup";

export function initialValues(data){
    return {
        name: data?.name ?? "",
        dir: data?.dir ?? "",
        city: data?.city ?? "",
        department: data?.department ?? "",
        phone1: data?.phone1 ?? "",
        phone2: data?.phone2 ?? "",
        zipcode: data?.zipcode ?? "",
        Details: data?.Details ?? ""
    }
}

export function validationSchema(){
    return Yup.object({
        name: Yup.string().required(true),
        dir: Yup.string().required(true),
        city: Yup.string().required(true),
        department: Yup.string().required(true),
        phone1: Yup.number().required(true),
        phone2: Yup.number(),
        zipcode: Yup.string().required(true),
        Details: Yup.string()
    })
}