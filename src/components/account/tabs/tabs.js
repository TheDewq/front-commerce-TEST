"use client";
import classNames from "classnames";
import styles from "./tabs.module.scss";
import { useState } from "react";
import { useAuth } from "@/hooks";
import { useRouter } from "next/navigation";
import Settings from "../settings/settings";

export default function Tabs(props){
    const [toggle, setToggle] = useState(0)
    const {logout, user} = useAuth();
    const router = useRouter();

    const fun_logout = ()=>{
        logout();
    }

    

    return(
        <div>
            <div className={styles.tabs}>
                <div onClick={()=>setToggle(0)} className={classNames({[styles.selected]:toggle === 0})}>
                    <p>mis pedidos</p>
                </div>
                <div onClick={()=>setToggle(1)} className={classNames({[styles.selected]:toggle === 1})}>
                    <p>mis direcciones</p>
                </div>
                <div onClick={()=>setToggle(3)} className={classNames({[styles.selected]:toggle === 3})}>
                    <p>indeterminado</p>
                </div>
                <div onClick={()=>setToggle(2)} className={classNames({[styles.selected]:toggle === 2})}>
                    <p>Ajustes</p>
                </div>
                <div onClick={()=>fun_logout()}>
                    <i class="bi bi-box-arrow-right"></i>
                </div>
            </div>
            <div className={styles.renderzone}>
                <div className={classNames({[styles.show]:toggle === 0})}>
                    <h1>pedidos</h1>
                </div>
                <div className={classNames({[styles.show]:toggle === 1})}>
                    <h1>direcciones</h1>
                </div>
                <div className={classNames({[styles.show]:toggle === 2})}>
                    <Settings/>
                </div>
                <div className={classNames({[styles.show]:toggle === 3})}>
                    <h1>indeterminado</h1>
                </div>
                <div className={classNames({[styles.show]:toggle === 4})}>

                </div>
            </div>
        </div>
    )
}
