import Link from "next/link";
const navItems = [
    { path: "./about", text : "About"},
    { path: "./test", text : "test"},    
    { path: "./product", text : "Product"},
];

export const NavBar = () =>  {
  return (
    <nav className="bg-blue-500 p-2 m-2 rounded">
        <div className="container  flex justify-between items-center p-1">
                <Link href="/" className="text-white text-lg font-semibold flex items-center space-x-2">                     
                    <span>Inicio</span></Link>
                <div className="space-x-4 flex">                                                          
                    {
                        navItems.map( navElement => (
                            <Link key={navElement.path} href={navElement.path} 
                                className="text-white hover:border-b-2 border-blue-900 pb-3">
                                    {navElement.text}
                            </Link>
                        ))
                    }
                
                </div>
        </div>
    </nav>
  )
}
