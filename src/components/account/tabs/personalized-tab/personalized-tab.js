import classNames from "classnames";
import { useState } from "react";
import styles from "./personalized-tab-module.scss";

export function PersonalizedTab(props){
    const {items} = props; // name, jsx

    const Lii = (props) => {
        const {children, onclick} = props
        return(
            <li onClick={onclick} className="nav-item"><a className="nav-link">{children}</a></li>
        )
    }
    
    const [show, setShow] = useState(0);

    return(
        <>
            <div className="tab_zone">
                <ul>
                    {items.map((item, index)=>(
                        <Lii onclick={setShow(index)}>{item.name}</Lii>
                    ))}
                </ul>
            </div>

            <div className="render_zone">
                {items.map((item, index)=>(
                    <div className={classNames(styles.content, {[styles.show]:show === index})} >{item.jsx}</div>
                ))}
            </div>
        </>
    )
}   


///////////////////////// Como funciona?

//parametros: [nombre_del tap, jsx],[nombre_del tap, jsx]....