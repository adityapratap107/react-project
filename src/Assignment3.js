import React from "react";
// import "./Assignment3.css";
import componentsImage from './assets/images/assignment1/components.png'
import stateImage from './assets/images/assignment1/state.png'
import eventsImage from './assets/images/assignment1/events.png'
import Header from "./componentsAssignment3/header";
import Concept from "./componentsAssignment3/concept";

function Assignment3() {
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
      <Header/>
      <ul id="concepts">  
        {/* <li className="concept">
          <img src={concepts[0].image} className="boxIcon" alt={concepts[0].title} />
          <h2>{concepts[0].title}</h2>
          <p>{concepts[0].description}</p>
        </li> */}
        {/* <li className="concept">
          <img src={concepts[1].image} className="boxIcon" alt={concepts[1].title} />
          <h2>{concepts[1].title}</h2>
          <p>{concepts[1].description}</p>
        </li> */}

        {/* <li className="concept">
          <img src={concepts[2].image} className="boxIcon" alt={concepts[2].title} />
          <h2>{concepts[2].title}</h2>
          <p>{concepts[2].description}</p>
        </li> */}
        <Concept image={concepts[0].image} title={concepts[0].title} description={concepts[0].description} />
        <Concept image={concepts[1].image} title={concepts[1].title} description={concepts[1].description} />
        <Concept image={concepts[2].image} title={concepts[2].title} description={concepts[2].description} />

      </ul>
    </div>
  );

}

export default Assignment3;




