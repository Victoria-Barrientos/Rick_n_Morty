import { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value); 
   }

   return (
      <div className={styles.Container}>
         <input type='search' onChange={handleChange} className={styles.Input}/>
         <button onClick={() => onSearch(id)} className={styles.Button}>Buscar</button>
      </div>
   );
}
