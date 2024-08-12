"use client";

import { banner } from "@/api/banner"
import { Button, Image, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from "./banner.module.scss";

export default function Banner(){
    const [imagen, setImagen] = useState("null")
    const hacer = async () =>{
        const response = await getBanner();
        setImagen(response);
    }
    useEffect(()=>{
        hacer();
    },[])
    return(
        <>
            <div className={styles.container}>
                <Image className={styles.imagen} src={imagen}/>
                <h1>titulo</h1>
                <p>fueajfsejfoasejfioj</p>
            </div>
            

        </>
    )

}
async function getBanner(){
    try {
        const bannerCtrl = new banner();
        const result = await bannerCtrl.getOne()   
        console.log("esta es la imagen: ", result.data[0].attributes.img.data[0].attributes.url)
        return(result.data[0].attributes.img.data[0].attributes.url)
    } catch (error) {
        console.error("banner error: ",error)
    }
}

