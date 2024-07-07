
import styles from "./topbar.module.scss"
import {Image} from "semantic-ui-react"
import AccountTop from "../account-top/account-top"
import SearchTop from "../search-top/search-top";
export default function TopBar(){
    return(
        <div className={styles.topbar}>
            <div className={styles.left}>
                <SearchTop/>
            </div>
            <div className={styles.right}>
                <AccountTop/>
            </div>
        </div>
    )
}