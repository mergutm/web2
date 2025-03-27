import { Footer, NavBar } from "../tools";

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