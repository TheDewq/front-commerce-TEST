import InputText from "@/components/forms/input-text"
import Link from "next/link"
export default function RegisterForm(props){
    return(

        <div>
            <div className=" text-center mb-3">
                <h3>
                    Registro
                </h3>
            </div>
            
            <form>

                <input type="email" name="email" placeholder="correo electronico" className="form-control mb-1 mt-1"/>

                <input type="email" name="username" placeholder="confirmacion correo" className="form-control mb-1 mt-1"/>

                <input type="password" name="password" placeholder="contraseña" className="form-control mb-1 mt-1"/>

                <input type="password" name="confirm_password" placeholder="confirmacion contraseña" className="form-control mb-1 mt-1"/>

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