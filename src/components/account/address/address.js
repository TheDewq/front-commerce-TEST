import { Box } from "@chakra-ui/react";
import AddressModal from "./address_modal/address_modal";
import { useAuth } from "@/hooks";
import { Address as ApiAddress } from "@/api/address";

export default function Address(){
    const {user} = useAuth();
    const dirCtrl = new ApiAddress()
    try {
        console.log(dirCtrl.getAllbyId(user.id))
    } catch (error) {
        console.log(error)
    }
    
    return(
        <>
            <Box>
                <AddressModal/>
            </Box>
        </>
    )
}