export default function InputText(props){
    return(
        <input
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            className="form-control"
        >
            {props.children}
        </input>
    )
}