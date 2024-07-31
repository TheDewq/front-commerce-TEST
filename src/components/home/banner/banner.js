"use client";

import { banner } from "@/api/banner"
import { Button, Image, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function Banner(){
    const {imagen, setImagen} = useState("fasefaes");
    const getBanner = async ()=>{
        try {
            const BannerCtrl = new banner();
            const response = await BannerCtrl.getOne();
            setImagen( response.data.attributes.img.attributes.url )
        } catch (error) {
            console.error(error)
        }
    }
    (async ()=>{
        console.log("vamos coño")
        getBanner();
        console.log(imagen)
    })()

    return(
        <>
            <Image src={imagen}/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h1> menu </h1>
            <Button onClick={()=>{getBanner()}}>Vamos coño</Button>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    )
}