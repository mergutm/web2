import Link from 'next/link';
import { HomeIcon } from '@primer/octicons-react';
import { ActiveLink } from '../active-link/ActiveLink';

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
                    navItems.map( navItem => (
                    <ActiveLink key={navItem.path} { ...navItem }  />
                    ))
                }
                
                </div>
        </div>
    </nav>
  )
}
