import Head  from "next/head";
import {FC, ReactNode} from "react";
import { Button } from "@mui/material";
import { Sidemenu } from "../ui/Sidemenu";
// Se importa de automático un módulo con ctrl+.

interface Props{
    children?: ReactNode
    title: string
}

const Layout:FC<Props> = ({children,title}) => {
    /*
    function open(){
        if (document.getElementById("p")?.onclick) {
            
        }
    }
    */
    return (
        <>
        <Head>
        <title>{title}</title>
        </Head>
        
        {/*nav bar*/}
        <Sidemenu/>
        <Button id = "abrir" 
        //onClick = {open}
        >Menú</Button>
        <main>{children}</main>
        </>
        
    )
}
export default Layout