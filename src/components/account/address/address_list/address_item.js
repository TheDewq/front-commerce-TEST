import { Button } from "@chakra-ui/react";

export default function AddressItem(props){
    const{id, name, city, department, dir, phone1, phone2, zipcode, details } = props;
    return(
        <>
            <div>
                <p>{name}</p>
                <p>{city}</p>
                <p>{department}</p>
                <p>{phone1}</p>
                <i class="bi bi-trash3"></i>
                <i class="bi bi-pencil-square"></i>
            </div>
        </>
    )
}