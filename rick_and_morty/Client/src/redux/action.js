import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-type";
import axios from 'axios'

// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: ADD_FAV,
//              payload: data,
//           });
//        });
//     };
//  };

export const addFav = (character) => {
    const URL = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(URL, character);

            if(!data.length) throw Error('No hay favoritos');

            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch(error) {
            console.log(error.message);
        }
    };
};
 

export const removeFav = (id) => {
    const URL = `http://localhost:3001/rickandmorty/fav/` + id;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(URL);
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch(error) {
            console.log(error.message)
        }
    };
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
};

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}