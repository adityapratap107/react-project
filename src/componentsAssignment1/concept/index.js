import React from "react";
// import kekeyConceptsImage from './assets/images/assignment1/key-concepts.png'
import kekeyConceptsImage from '../../assets/images/assignment1/key-concepts.png';
import "./index.css";
const Concept = ({image,title,description}) => {
    return(
        <li className="concept">
            <img src={image} className="boxIcon" alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    )
}

export default Concept;