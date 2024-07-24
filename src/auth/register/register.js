"use client";

import { useFormik } from "formik"
import { initialValues, validationSchema} from "./register.form"
import { Input, Button, Stack } from "@chakra-ui/react";
import {Auth} from "@/api"
import Link from "next/link"

const authCtrl = new Auth()

export default function RegisterForm(props){
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await authCtrl.register(formValue)
                console.log("form sent")   
            } catch (error) {
                alert(error)
            }
            
        }
    })
    return(

        <div>
            <div className=" text-center mb-3">
                <h3>
                    Registro
                </h3>
            </div>
            
            <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={3} textAlign="center">
                        <Input type="email"
                        name="email"
                        placeholder="correo electronico"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.email}/>

                        <Input type="email" name="username" placeholder="confirmacion correo"  value={formik.values.username} onChange={formik.handleChange} isInvalid={formik.errors.username}/>

                        <Input type="password" name="password" placeholder="contraseña" value={formik.values.password} onChange={formik.handleChange} isInvalid={formik.errors.password}/>

                        <Input type="password" name="confirm_password" placeholder="confirmacion contraseña"  value={formik.values.confirm_password} onChange={formik.handleChange}  isInvalid={formik.errors.confirm_password}/>
                    
                    
                        <Button type="submit">
                                registrarse
                        </Button>
                        <Link href="/join/sign-in">
                            Atras
                        </Link>
                    </Stack>

                    
                
                    

                
            </form>
        </div>
    )
}
