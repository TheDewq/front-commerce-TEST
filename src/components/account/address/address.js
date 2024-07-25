import { Box, Divider } from "@chakra-ui/react";
import AddressModal from "./address_modal/address_modal";
import AddressList from "./address_list/address_list";
import { useState } from "react";

export default function Address(){
    const [reload, setReload] = useState(false);
    const onReload = ()=>{
        setReload(!reload)
    }
    return(
        <>
            <Box>
                <AddressModal onReload={onReload}/>
                <Divider px={1}/>
                <AddressList reload={reload} onReload={onReload}/>
            </Box>
        </>
    )
}