import { Button, Divider, Heading } from "@chakra-ui/react";
import styles from "./address_list.module.scss";
export default function AddressItem(props){
    const{id, name, city, department, dir, phone1, phone2, zipcode, details } = props;
    return(
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Heading as='h2'>{name}</Heading>
                    <p>{city}</p>
                    <p>{department}</p>
                    <p>{phone1}</p>
                </div>
                <div className={styles.right}>
                    <i class="bi bi-trash3"></i>
                    <i class="bi bi-pencil-square"></i>
                </div>
                
                
            </div>
            <Divider/>
        </>
    )
}