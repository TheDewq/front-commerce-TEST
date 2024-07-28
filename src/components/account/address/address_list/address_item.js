import { Button, Divider, Heading } from "@chakra-ui/react";
import styles from "./address_list.module.scss";
import ModifyAddressModal from "../address_modal/modify_address_modal";
import AddressDelete from "../address_delete/address_delete";

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
                    <AddressDelete id={id} onReload={onReload}/>
                </div>
                
                
            </div>
            <Divider/>
            
        </>
    )
}