import styles from "./join-layout.module.scss";
import CloseBtn from "@/components/buttons/close-btn";
import InputText from "@/components/forms/input-text";
export default function JoinLayout(props) {
    return (
        <>
            <div className={styles.container}>
                <h1 className="storeTitle">
                    Zephyra
                </h1>
                <div className={styles.center}>

                        <CloseBtn/>
                    <div className={styles.form}>
                        {props.children}
                        <InputText name="test" placeholder="nomms"/>
                    </div>
                </div>
            </div>
        </>
    )
        
}
