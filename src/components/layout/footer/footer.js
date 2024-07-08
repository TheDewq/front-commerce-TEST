"use client";
import styles from "./footer.module.scss";

import Link from "next/link";
import { Button } from "semantic-ui-react";
export default function Footer(props){
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.left}>
                    <h1>
                        Zephyra
                    </h1>
                </div>
                <div className={styles.center}>
                    <ul>
                        <li>
                            <Link href={"/"}>
                                Terminos y condiciones
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                Politica de privacidad
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                Contacto
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                PQRs
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.right}>
                    <Link className="bi bi-facebook" href="#" ></Link>
                    <Link className="bi bi-instagram" href="#" ></Link>
                    <Link className="bi bi-tiktok" href="#" ></Link>
                </div>
                
            </div>
            <div className={styles.copyright}>
                    <span>
                        Copypasta 2024
                    </span>
            </div>
        </>
    )
}