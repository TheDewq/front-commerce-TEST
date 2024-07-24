"use client"

import { useFormik } from "formik";
import { initialValues, validationSchema } from "./login.form";
import Link  from "next/link";
import { Auth } from "@/api";
import { useAuth } from "@/hooks"
import { useRouter } from "next/navigation";
import { Input, Button, Stack } from "@chakra-ui/react";

const authCtrl = new Auth()

export default function Login(){
    const router = useRouter();
    const {login} = useAuth()
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue)=>{
            try {
                const response = await authCtrl.login(formValue)
                login(response.jwt);
                router.push("/")
                
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
            <form onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                    <Input
                        type="email"
                        name="identifier"
                        value={formik.values.identifier}
                        placeholder="correo electronico"
                        onChange={formik.handleChange}
                        isInvalid={formik.errors.identifier}

                    />
                    <Input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        placeholder="contraseña"
                        onChange={formik.handleChange}
                        isInvalid={formik.errors.password}
                    />
                    <div className="text-center mt-2">
                    <Button
                            type="submit"
                        >
                            Iniciar Sesion
                        </Button>
                    </div>
                </Stack>
                    
                
                <div className="text-center mt-1">
                    <Link href="/join/sign-up">
                        ¿No tienes cuenta?
                    </Link>
                </div>
                
            </form>
            
            
        </div>
    )
}
