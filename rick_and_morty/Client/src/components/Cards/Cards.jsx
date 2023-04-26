import Card from '../Card/Card';
import styles from "./Cards.module.css"

export default function Cards({ characters, onClose }) {
   return (
      <div className={styles.Container}>
         {characters.map(({ name, status, species, gender, origin , image, id}) => {      
            return (
                  <Card 
                     key={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     origin={origin.name}
                     image={image}
                     id={id}
                     onClose={onClose}
                  />
            );
         })} 
      </div>
   );
}
