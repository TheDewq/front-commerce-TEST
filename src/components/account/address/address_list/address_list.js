import { useEffect, useState } from "react";
import { Address as ApiAddress } from "@/api/address";
import { useAuth } from "@/hooks";
import { add, map } from "lodash";
import AddressItem from "./address_item";

export default function AddressList(props){
    const { reload, onReload } = props;
    const [addresses, setAddresses] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                const dirCtrl = new ApiAddress();
                const response = await dirCtrl.getAllbyId(user.id);
                setAddresses(response.data);
            } catch (error) {
                console.log("Address error: ", error);
            }
        };

        if (user && user.id) {
            fetchAddresses();
        }
    }, [reload, user]);

    useEffect(() => {
        if (addresses !== null) {
            console.log("Updated addresses: ", addresses);
        }
    }, [addresses]);
    

    return(
        <>
    <div>
        {addresses && addresses.length > 0 ? (
            addresses.map((element, index) => (
                    <AddressItem
                        name={element.attributes.name}
                        city={element.attributes.city}
                        department={element.attributes.department}
                        phone1={element.attributes.phone1}
                        phone2={element.attributes.phone2}
                        zipcode={element.attributes.zipcode}

                        id={element.id}
                    />
                ))
            ) : (
                <p>No addresses found.</p>
            )}
        </div>
    </>

    )
}