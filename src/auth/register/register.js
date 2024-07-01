import { useFormik } from "formik"
import { initialValues, validationSchema} from "./register.form"

import Link from "next/link"
export default function RegisterForm(props){
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: () => {
            console.log("formulario listo")
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

                <input type="email" name="email" placeholder="correo electronico" className="form-control mb-1 mt-1" value={formik.values.email} onChange={formik.handleChange} aria-invalid={formik.errors.email}/>

                <input type="email" name="username" placeholder="confirmacion correo" className="form-control mb-1 mt-1" value={formik.values.username} onChange={formik.handleChange} aria-invalid={formik.errors.username}/>

                <input type="password" name="password" placeholder="contraseña" className="form-control mb-1 mt-1" value={formik.values.password} onChange={formik.handleChange} aria-invalid={formik.errors.password}/>

                <input type="password" name="confirm_password" placeholder="confirmacion contraseña" className="form-control mb-1 mt-1" value={formik.values.confirm_password} onChange={formik.handleChange} aria-invalid={formik.errors.confirm_password}/>

                <div className="text-center mt-3">
                    <button className="primaryBtn">
                            registrarse
                    </button>
                    <Link href="/" className="secondaryBtn ms-1">
                        Cancelar
                    </Link>
                </div>
                
                    

                
            </form>
        </div>
    )
}