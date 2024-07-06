"use client"
import styles from "./join-layout.module.scss";
import { useAuth } from "@/hooks";
import { useRouter } from "next/navigation";
export default function JoinLayout(props) {
    const { user } = useAuth();
    const router = useRouter();

    if(user){
        router.push("/");
        return null;
    } 
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

