import { Link } from "react-router-dom";
import styles from "./Card.module.css"

export default function Card({name, status, species, gender, origin, image, id, onClose}) {
   return (
      <div className={styles.Container}>
            <button onClick={() => onClose(id)} className={styles.Close}>X</button>
            <Link to={`/detail/${id}`} className={styles.CardLink}>
            <h3 className={styles.CardName}>{name}</h3>
            </Link>
            <img src={image} alt={name} />
            <h3 className={styles.CardName}>{status}</h3>
         <h3>{species}</h3>
         <h3>{gender}</h3>
         <h3>{origin.name}</h3>
      </div>
   );
}
