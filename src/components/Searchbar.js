import React, {useState, useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Searchbar = (props) => {
    const { favoritePokemons } = useContext(FavoriteContext);
    const [search, setSearch] = useState("dito")
    const {onSearch} = props
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon" onChange={onChangeHandler} />
                <div className="searchbar-btn">
                    <button onClick={onButtonClickHandler} >Buscar</button>
                </div>
            </div> 
            <div>
                <div className="pokemon-fav-quatity">{favoritePokemons.length} ❤️ Pokemons Favoritos</div>
            </div>
            
        </div>
        
    )
}

export default Searchbar;