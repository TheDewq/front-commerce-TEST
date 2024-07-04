"use client"

import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./login.form";
import Link  from "next/link";
import { Auth } from "@/api";
import { useAuth } from "@/hooks"
import { useRouter } from "next/router";

const authCtrl = new Auth()


export default function Login(){
    const {login} = useAuth()
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue)=>{
            try {
                const response = await authCtrl.login(formValue)
                login(response.jwt);
                console.log("form sent") 
                console.log(response)
            } catch (error) {
                console.error(error)
            }
        }
    })
    return(
        <div>   
            <div  className="text-center mb-3">
                <h3>
                    Iniciar Sesion
                </h3>
            </div>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group>
                    <Form.Input
                        type="email"
                        name="identifier"
                        value={formik.values.identifier}
                        placeholder="correo electronico"
                        onChange={formik.handleChange}
                        error={formik.errors.identifier}

                    />
                    <Form.Input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        placeholder="contraseña"
                        onChange={formik.handleChange}
                        error={formik.errors.password}
                    />
                    <div className="text-center mt-2">
                    <Form.Button
                            type="submit"
                        >
                            Iniciar Sesion
                        </Form.Button>
                    </div>
                    
                </Form.Group>
                <div className="text-center mt-1">
                    <Link href="/join/sign-up">
                        ¿No tienes cuenta?
                    </Link>
                </div>
                
            </Form>
            
            
        </div>
    )
}
