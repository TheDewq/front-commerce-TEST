import { Button, Divider, Heading } from "@chakra-ui/react";
import styles from "./address_list.module.scss";
import AddressForm from "../address_modal/address_form";
import ModifyAddressModal from "../address_modal/modify_address_modal";
export default function AddressItem(props){
    const{id, data, onReload} = props;
    return(
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Heading as='h2'>{data.name}</Heading>
                    <p>{data.city}</p>
                    <p>{data.department}</p>
                    <p>{data.phone1}</p>
                </div>
                <div className={styles.right}>
                    <ModifyAddressModal id={id} data={data} onReload={onReload}/>
                    <i class="bi bi-trash3"></i>
                </div>
                
                
            </div>
            <Divider/>
            
        </>
    )
}