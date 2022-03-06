import React, { useContext} from "react";

const navbar = () => {
    const logoImg ="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    return (
        
            <nav>
                <div>
                    <img alt="poke-api-logo"
                    src={logoImg}
                    className="navbar-img"/>
                </div>
            </nav>
        
    );
};
export default navbar 