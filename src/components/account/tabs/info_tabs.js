"use client";
import classNames from "classnames";
import styles from "./tabs.module.scss";
import { useState } from "react";
import { useAuth } from "@/hooks";
import { useRouter } from "next/navigation";
import Settings from "../settings/settings";
import { Tabs, Tab, TabPanel, TabList, TabPanels } from "@chakra-ui/react";

export default function InfoTabs(props){
    const [toggle, setToggle] = useState(0)
    const {logout, user} = useAuth();
    const router = useRouter();

    const fun_logout = ()=>{
        logout();
    }

    

    return(
       <>
       <Tabs>
            <TabList>
                <Tab>Mis pedidos</Tab>
                <Tab>Direcciones</Tab>
                <Tab>Ajustes</Tab>
                <Tab onClick={fun_logout}><i class="bi bi-box-arrow-right"></i></Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                <p>one!</p>
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <Settings/>
                </TabPanel>
                <TabPanel>
                </TabPanel>
            </TabPanels>
        </Tabs>
       </>
    )
}
