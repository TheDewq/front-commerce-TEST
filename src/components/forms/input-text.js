import styles from "./forms.module.scss"

export default function InputText(props){
    return(
        <input
            type="text"
            name={props.name}
            placeholder={props.placeholder}
            className={styles.inputText}
        >
            {props.children}
        </input>
    )
}