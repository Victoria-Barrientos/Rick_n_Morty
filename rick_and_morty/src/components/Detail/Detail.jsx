import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {

   const {detailId} = useParams();

   const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [detailId]);

     let {name, status, species, gender, origin, image} = character;

     return (
      <div>
         {(name) ? (
               <>
                  <p>NAME: {name}</p>
                  <p>STATUS: {status}</p>
                  <p>SPECIES: {species}</p>
                  <p>GENDER: {gender}</p>
                  <p>ORIGIN: {origin.name}</p>
                  <img src={image} alt={name}/>
               </>
            ) : (
                  <h3>Loading...</h3>
            )
         }
      </div>
      )
     

}