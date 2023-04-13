import { useState } from "react";
import { filterCards, orderCards } from "../../redux/action";
import Card from "../Card/Card";
import { connect } from "react-redux";

export const Favorites = ({ myFavorites, filterCards, orderCards }) => {

    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        orderCards(event.target.value)
        setAux(true)
    };

    const handleFilter = (event) => {
        filterCards(event.target.value)
    };

    return (
        <div>
            <div>
                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>

        {
            myFavorites?.map( (fav) => {
                return (
                    <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                    />
                )
            })
        }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        filterCards: (gender) => { dispatch(filterCards(gender))},
        orderCards: (orden) => { dispatch(orderCards(orden))}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorites);