import styles from "./tabs.module.scss";
import { PersonalizedTab } from "./personalized-tab/personalized-tab";

function Lii(props){
    const { children} = props
    return(
        <li className="nav-item"><a className="nav-link">{children}</a></li>
    )
}

function Tabs(props){
    

    const prueba1 = ()=>{
      <div>
        <h1>Soy prueba 1</h1>
      </div>
    }
    const prueba3 = ()=>{
      <div>
        <h1>Soy p3rueba 1</h1>
      </div>
    }
    const prueba2 = ()=>{
      <div>
        <h1>Soy 22prueba 1</h1>
      </div>
    }

    const items = [
      {"name": "mis pedidos",
        "jsx": prueba1
      },
      {"name": "alv",
        "jsx": prueba2
      },
      {"name": "siss",
        "jsx": prueba3
      }
    ]

    return(
      <PersonalizedTab items={items}></PersonalizedTab>
    )
}
export default Tabs;