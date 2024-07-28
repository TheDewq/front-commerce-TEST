import { Box, Button, FormHelperText, FormLabel, Input, InputGroup, Spacer } from "@chakra-ui/react";
import { initialValues, validationSchema } from "./address_form.form";
import { useFormik } from "formik";
import { Address as ApiAddress } from "@/api/address";
import { useAuth } from "@/hooks";

export default function AddressForm(props){
    const {Close, onReload, data=null, id=null} = props;
    const { user } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(data),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue)=>{
            try {
                const dirCtrl = new ApiAddress()
                if(data !== null && id !== null){
                    console.log(await dirCtrl.UpdateById(id, formValue))
                }else{
                    await dirCtrl.createOne(user.id, formValue);
                }
                console.log("direccion enviada");
                    onReload();
            } catch (error) {
                console.error(error)
            }
        }
    })

    return(
        <>
            <form onSubmit={formik.handleSubmit}>
            
            <InputGroup>
                <Box w="100%" p={1}>
                    <FormLabel>Nombre</FormLabel>
                    <Input
                        placeholder="nombre"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        isInvalid={formik.errors.name}
                    />
                </Box>
                </InputGroup>
                
                <InputGroup>
                    <Box w="100%" p={1}>
                        <FormLabel>Direccion</FormLabel>
                        <Input
                            placeholder="direccion"
                            name="dir"
                            value={formik.values.dir}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.dir}
                        />
                    </Box>
                </InputGroup>
                <InputGroup>
                    <Box p={1}>
                        <FormLabel>Ciudad</FormLabel>
                        <Input
                            placeholder="ciudad"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.city}
                        />
                    </Box>
                    <Box p={1}>
                        <FormLabel>Departamento</FormLabel>
                        <Input
                            placeholder="departamento"
                            name="department"
                            value={formik.values.department}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.department}
                        />
                    </Box>
                </InputGroup>
                <InputGroup>
                    <Box p={1}>
                        <FormLabel>Telefono 1</FormLabel>
                        <Input
                            placeholder="telefono"
                            name="phone1"
                            value={formik.values.phone1}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.phone1}
                        />
                    </Box>
                    <Spacer/>
                    <Box p={1}>
                        <FormLabel>Telefono 2</FormLabel>
                        <Input
                            placeholder="telefono"
                            name="phone2"
                            value={formik.values.phone2}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.phone2}
                        />
                    </Box>
                </InputGroup>
                <InputGroup>
                <Box p={1}>
                        <FormLabel>Codigo postal</FormLabel>
                        <Input
                            placeholder="codigo postal"
                            name="zipcode"
                            value={formik.values.zipcode}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.zipcode}
                        />
                    </Box>
                    <Box p={1}>
                        <FormLabel>Detalles</FormLabel>
                        <Input
                            placeholder="detalles"
                            name="Details"
                            value={formik.values.Details}
                            onChange={formik.handleChange}
                            isInvalid={formik.errors.Details}
                        />
                    </Box>
                </InputGroup>
                <InputGroup>
                    <Button type="submit">Confirmar</Button>
                    <Button onClick={Close}>Cancelar</Button>
                </InputGroup>
            </form>
        </>
    )
}