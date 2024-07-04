"use client"
import styles from "./join-layout.module.scss";
import CloseBtn from "@/components/buttons/close-btn";
import InputText from "@/components/forms/input-text";
import { useAuth } from "@/hooks";
import { useRouter } from "next/navigation";
export default function JoinLayout(props) {
    const {user} = useAuth();
    const router = useRouter();
    if(user) router.push("/");
        return (
        <>
            <div className={styles.container}>
                <h1 className={styles.storeTitle}>
                    Zephyra
                </h1>
                <div className={styles.center}>
                    <div className={styles.form}>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
        
}
