import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-type";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return { 
                ...state,
                myFavorites: payload,
                allCharacters: payload
            };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload
            };
        case FILTER: 
            return {
                ...state,
                myFavorites: state.allCharacters.filter( (char) => char.gender === payload )
            };
        case ORDER: 
            const allCharactersCopy = [...state.allCharacters]
            return {
                ...state,
                myFavorites: 
                    payload === "A" ? allCharactersCopy.sort( (a, b) => a.id - b.id ) : allCharactersCopy.sort(  (a, b) => b.id - a.id )

            }
        default:
            return {
                ...state
            };
    }
}

export default rootReducer;