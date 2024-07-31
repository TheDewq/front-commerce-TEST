"use client";

import { banner } from "@/api/banner"
import { Button, Image, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Banner(){
    const [imagen, setImagen] = useState("null")

    useEffect(()=>{
        const response = getBanner();
        setImagen(response);
    },[])
    return(
        <>
            <h1>principal</h1>
            {imagen && <Image src={imagen}/>}
        </>
    )

}
async function getBanner(){
    try {
        const bannerCtrl = new banner();
        const result = await bannerCtrl.getOne()
        console.log(result.data[0].attributes.img.data[0].attributes.url)
        return(result.data[0].attributes.img.data[0].attributes.url)
    } catch (error) {
        console.error("banner error: ",error)
    }
}

