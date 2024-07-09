"use client";
import { useAuth } from "@/hooks";
import { DateTime } from "luxon";
import styles from "./basic-info.module.scss";
export default function BasicInfo(props){
    const {user} = useAuth();
    return(
        <>
            <div className={styles.container}>
                <i class="bi bi-person-square"></i>
                <h6>
                    {user.email}
                </h6>
                <p> Miembro desde {DateTime.fromISO(user.createdAt, {locale: "es"}).toFormat("DDD")}</p>

            </div>
        </>
    )

}