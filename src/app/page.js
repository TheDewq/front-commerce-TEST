"use client";

import styles from "@/scss/global.scss";
import { useAuth } from "@/hooks";
import Link from "next/link"
import { useRouter } from "next/navigation";
export default function Home() {
  const { user, logout} = useAuth();
  return (
    <>
      <h2>
        esto es el home
      </h2>

      <Logon user={user} logout={logout}>

      </Logon>
    </>
  );
}

function Logon(props){
  const router = useRouter();
  if(!props.user){
      return(
          <Link href="/join/sign-in" className="primaryBtn">
              Iniciar sesion
          </Link>
      )
  }else{
      return(
          <button onClick={props.logout} className="secondaryBtn">
              Cerrar sesion
          </button>
      )
  }


}

