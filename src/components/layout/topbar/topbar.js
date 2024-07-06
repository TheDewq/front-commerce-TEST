
import styles from "./topbar.module.scss"
import {Image} from "semantic-ui-react"
import AccountTop from "../account-top/account-top"
export default function TopBar(){
    return(
        <div className={styles.topbar}>
            <div className={styles.left}>
                <h1>
                    Zephyra
                </h1>
            </div>
            <div className={styles.right}>
                <AccountTop/>
            </div>
        </div>
    )
}