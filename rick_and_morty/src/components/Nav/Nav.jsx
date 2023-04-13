import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css"

export default function Nav({onSearch}) {
    let location = useLocation();
    if (location.pathname === "/") {
        return (
            <>
            <div className={styles.Nav}>
            <Link to="/home" className={styles.Home}><img className={styles.Logo} src="https://res.cloudinary.com/lennyj/image/upload/v1593515673/58f37720a4fa116215a9240f_1.png" alt="Rick & Morty"></img></Link>
            <Link to="/about" className={styles.About}>About</Link>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div className={styles.Nav}>
            <Link to="/home" className={styles.Home}><img className={styles.Logo} src="https://res.cloudinary.com/lennyj/image/upload/v1593515673/58f37720a4fa116215a9240f_1.png" alt="Rick & Morty"></img></Link>
                <div className={styles.NavLinks}>
                    <SearchBar onSearch={onSearch}/>
                    <Link to="/about" className={styles.About}>About</Link>
                </div>
            </div>
            </>
        )
    }
    
}