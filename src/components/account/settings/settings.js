import styles from "./settings.module.scss";
import { Form } from "semantic-ui-react";
export default function Settings(){
    return(
        <>
            <div>
                <UpdatePassword/>
            </div>
        </>
    )
}

function UpdatePassword(){
    return (
        <>
            <Form.Button data-bs-toggle="modal" data-bs-target="#modalCambiarContraseña">
                Cambiar Contraseña
            </Form.Button>

            <div className="modal fade" id="modalCambiarContraseña" tabindex="-1" a> 
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Cambiar Contraseña</h1>
                        </div>
                        <div className="modal-body">
                        <Form>
                            <Form.Group>
                                <label>Contraseña Actual</label>
                                <Form.Input placeholder="Contraseña Actual"/>
                                <label>Contraseña Nueva</label>
                                <Form.Input placeholder="Contraseña Nueva"/>
                                <label>Contraseña Nueva Confirmacion</label>
                                <Form.Input placeholder="Contraseña Nueva Confirmacion"/>
                                <Form.Button>
                                    Actualizar
                                </Form.Button>
                            </Form.Group>
                        </Form>
                        </div>
                    </div>

                </div>
                
            </div>
        </>
    )
}

