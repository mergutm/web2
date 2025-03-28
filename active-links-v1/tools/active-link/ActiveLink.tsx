'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
//import style from './ActiveLink.module.css';

interface Props {
  path: string;
  text: string;
}

const style = {
  "link": "text-white hover:border-b-2 border-blue-900 p-3 mx-3",
  "active-link": "border-b-2 border-indigo-700"
}

export const ActiveLink = ({  path, text }: Props ) => {

  const pathName = usePathname();
  console.log(pathName, path, pathName == path);

  return (
    <Link 
      className={ `${ style.link } ${  (pathName === path ) && style['active-link'] } ` } 
      href={ path }>
        { text } 
    </Link>
  )
}

