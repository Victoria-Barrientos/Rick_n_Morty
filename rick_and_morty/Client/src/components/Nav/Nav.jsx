import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link  } from "react-router-dom";
import styles from "./Nav.module.css"

export default function Nav({onSearch, setAccess}) {

    const handleLogout = () => {
        setAccess(false);
    }
    return (
            <>
            <div className={styles.Nav}>
            <Link to="/home" className={styles.Home}><img className={styles.Logo} src="https://res.cloudinary.com/lennyj/image/upload/v1593515673/58f37720a4fa116215a9240f_1.png" alt="Rick & Morty"></img></Link>
                <div className={styles.NavLinks}>
                    <SearchBar onSearch={onSearch}/>
                    <Link to="/about" className={styles.About}>About</Link>
                    <Link to="/favorites">Favorites</Link>
                    <button onClick={handleLogout} >LogOut</button>
                </div>
            </div>
            </>
        )
    }