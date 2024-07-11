"use client";
import  BasicInfo  from "@/components/account/basic-info/basic-info";
import Tabs from "@/components/account/tabs/Tabs";
import MainLayout from "@/layout/main/main-layout";

export default function Account(){
    return(
        <>
            <MainLayout>
                <BasicInfo/>
                <Tabs></Tabs>
               
            </MainLayout>
            
        </>
    )
}