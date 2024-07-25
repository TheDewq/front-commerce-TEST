import { useEffect, useState } from "react";
import { Address as ApiAddress } from "@/api/address";
import { useAuth } from "@/hooks";

export default function AddressList(props){
    const {reload, onReload}= props;
    const [addresses, setAddresses]= useState("")
    const {user} = useAuth()

    useEffect(() => {
        (async () => {
            try {
                const dirCtrl = new ApiAddress();
                const response = await dirCtrl.getAllbyId(user.id);
                setAddresses(response)
            } catch (error) {
                console.log(error);
            }
        })();
    }, [reload]);
    

    return(
        <>

        </>
    )
}