import React, {useState} from "react";


const Searchbar = () => {
    const [search,setSearch] = useState("dito")
    const onChangeHandler = (e) =>{
        console.log("pokemon:", e.target.value)
        setSearch(e.target.value)
    }
    return(
        <div className="searchbar-container">
            <div className="search-bar">
                <input placeholder="Buscar Pokemon?" onChange={onChangeHandler}  />
                {search}
            </div>


        </div>


    );

};

export default Searchbar