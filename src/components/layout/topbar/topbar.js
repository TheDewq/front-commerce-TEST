import styles from "./topbar.module.scss"
import {Image} from "semantic-ui-react"
export default function TopBar(){
    return(
        <div className={styles.topbar}>
            <div className={styles.left}>
                <span>
                    Secciones
                </span>
            </div>
            <div  className={styles.center}>
                <h1>
                    Zephyra
                </h1>
            </div>
            <div className={styles.right}>
                <span>
                    Account
                </span>
            </div>
        </div>
    )
}