//import { Footer, NavBar } from "../tools";
import { NavBar, Footer } from "@/tools";


export default function GeneralLayout(
    { children}: {children: React.ReactNode}
){
    return (
        <>   
            <NavBar />
            {children}
            fin layout general
            <Footer />
        </>
    )

}