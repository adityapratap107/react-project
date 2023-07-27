import React from "react";
import "./Assignment1.css";
import componentsImage from './assets/images/assignment1/components.png'
import stateImage from './assets/images/assignment1/state.png'
import eventsImage from './assets/images/assignment1/events.png'
import kekeyConceptsImage from './assets/images/assignment1/key-concepts.png'

function Assignment1() {
  const concepts = [
    {
      title: 'Components',
      image: componentsImage,
      description:
        'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
    },
    {
      title: 'State',
      image: stateImage,
      description:
        'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
    },
    {
      title: 'Events',
      image: eventsImage,
      description:
        'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
    },
  ];
  
  return (
    <div className="Assignment1">
      <header>
        <img src={kekeyConceptsImage} alt="Medal Badge with a star"/>
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
      <ul id="concepts">
        <li className="concept">
          <img src={concepts[0].image} alt={concepts[0].title} />
          <h2>{concepts[0].title}</h2>
          <p>{concepts[0].description}</p>
        </li>
      </ul>
    </div>
  );

}

export default Assignment1;




