import React from "react";
import kekeyConceptsImage from '../../assets/images/assignment1/key-concepts.png';

const Header = () => {
    return(
        <header>
            <img src={kekeyConceptsImage} className="starIcon" alt="Medal Badge with a star"/>
            <h1>Key React Concepts</h1>
            <p>Selected key React concepts you should know about</p>
        </header>
    )
}

export default Header;