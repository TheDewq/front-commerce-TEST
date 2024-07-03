"use client";

import { useFormik } from "formik"
import { initialValues, validationSchema} from "./register.form"
import { Form } from "semantic-ui-react"
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
                alert("si se pudo");    
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
            
            <Form onSubmit={formik.handleSubmit}>
                <Form.Input type="email" name="email" placeholder="correo electronico"  value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email}/>

                <Form.Input type="email" name="username" placeholder="confirmacion correo"  value={formik.values.username} onChange={formik.handleChange} error={formik.errors.username}/>

                <Form.Input type="password" name="password" placeholder="contraseña" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password}/>

                <Form.Input type="password" name="confirm_password" placeholder="confirmacion contraseña"  value={formik.values.confirm_password} onChange={formik.handleChange}  error={formik.errors.confirm_password}/>

                <div className="text-center mt-3">
                    <Form.Button type="submit">
                            registrarse
                    </Form.Button>
                    <Link href="/" className="secondaryBtn ms-1">
                        Cancelar
                    </Link>
                </div>
                
                    

                
            </Form>
        </div>
    )
}
