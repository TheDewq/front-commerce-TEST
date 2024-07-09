"use client";

import { useAuth } from "@/hooks";
import {Icon, Button, Image} from "semantic-ui-react"
import { useRouter } from "next/navigation";
import styles from "./account-top.module.scss";

export default function AccountTop(props){
    const {isOpensearch = false} = props;
    const { user } = useAuth();
    const router = useRouter();

    const cart_account = 100;

    const goSignin = ()=>router.push("/join/sign-in");
    const goAccount = ()=>router.push("/account");
    const goCart = ()=>{
        if(!user){
            goSignin
        }else{
            alert("falta implementar el carro :( quiero que sea un sidebar");
        }   
    }

    if(!user){
        return(
            <div className={styles.container}>
                <i class="bi bi-box-arrow-in-right" onClick={goSignin}><span>Iniciar Sesion</span></i>
            </div>
        )
    }else{
        return(
            <div className={styles.container}>
                <i class="bi bi-cart" onClick={goCart}>{cart_account > 99 ? <span>99+</span> : cart_account > 0 ? <span>{cart_account}</span> : <span></span>}</i>
                <i class="bi bi-person-fill" onClick={goAccount}></i>
            </div>
            
            
        )
    }
}