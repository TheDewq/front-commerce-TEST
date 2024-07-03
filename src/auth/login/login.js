"use client"


import {Link} from "next/link";
import {Form} from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./login.form";

export default function Login(){
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: ()=>{
            alert("si sirve");
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
                        name="identifier"
                        value={formik.values.identifier}
                        placeholder="correo electronico"
                        onChange={formik.handleChange}
                        error={formik.errors.identifier}

                    />
                    <Form.Input
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
                <Link href="/join/sing-up">
                    No tienes cuenta
                </Link>
            </Form>
        </div>
    )
}