import { Link } from "react-router-dom";
import styles from "./Card.module.css"
import { addFav, removeFav } from "../../redux/action";
import { connect } from "react-redux";
import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Card({name, species, gender, image, id, key, onClose, addFav, removeFav, myFavorites}) {

   const location = useLocation()

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFav(id)
      }
      else {
         setIsFav(true);
         addFav({name, species, gender, image, id, key})
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <div className={styles.Container}>
      
            <button onClick={handleFavorite}> { isFav ? '❤️' : '🤍' }</button>
            {
            location.pathname !== "/favorites" && <button onClick={() => onClose(id)} className={styles.Close}>X</button>
            }
            <Link to={`/detail/${id}`} className={styles.CardLink}>
            <h3 className={styles.CardName}>{name}</h3>
            </Link>
            <img src={image} alt={name} />
            <h3>{species}</h3>
            <h3>{gender}</h3>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);