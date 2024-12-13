
import Link from "next/link"
import logo from '../../assets/logo.png'
import classes from './header.module.css';
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLink from "./Nav-link";
function Header() {
  
  return (
    <header className={classes.header}>
<Link className={classes.logo} href={'/'}>
<Image src={logo} alt="A plate with food on it " priority/>
</Link>
<nav className={classes.nav}>
  <ul>
    <li>
     <NavLink href={'/meals'}>
     Browse Meals
     </NavLink>

    </li>
    <li>
    <NavLink href={'/community'}>
     Browse Community
     </NavLink>
    </li>
  </ul>
</nav>

    </header>
  )
}

export default Header