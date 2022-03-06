import React from "react";

const Searchbar = () => {
    const onChangeHandler = (e) =>{
        console.log("pokemon:", e.target.value)
    }
    return(
        <div className="searchbar-container">
            <div className="search-bar">
                <input placeholder="Buscar Pokemon?" onChange={onChangeHandler} />
            </div>


        </div>


    );

};

export default Searchbar