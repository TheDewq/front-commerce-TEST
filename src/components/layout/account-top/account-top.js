"use client";

import { useAuth } from "@/hooks";
import {Icon, Button, Image} from "semantic-ui-react"
import { useRouter } from "next/navigation";
import styles from "./account-top.module.scss";

export default function AccountTop(props){
    const {isOpensearch = false} = props;
    const { user } = useAuth();
    const router = useRouter();

    const goSignin = ()=>router.push("/join/sign-in");
    const goAccount = ()=>router.push("/account");
    const goCart = ()=>{
        alert("falta implementar el carro :( quiero que sea un sidebar");
    }

    if(!user){
        return(
            <Button onClick={goSignin}>
                Iniciar sesion
            </Button>
        )
    }else{
        return(
            <div className={styles.container}>
                <Button icon className={styles.button} onClick={goAccount}>
                    <Image src="user-icon.png"></Image>
                </Button>
                <Button icon className={styles.button} onClick={goAccount}>
                    <Image src="user-icon.png"></Image>
                </Button>
                <Icon name="user outlined"/>
            </div>
            
            
        )
    }
}