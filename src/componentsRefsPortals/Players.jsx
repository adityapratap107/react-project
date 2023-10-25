import { useRef } from "react";
import { useState } from "react";

export default function Player() {
    const playerName = useRef()

    const [enteredPlayerName, setEnteredPlayerName] = useState('');
    // const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        // setSubmitted(false)
        setEnteredPlayerName(event.target.value);
    }
    const handleClick = () => {
        // setSubmitted(true);
        setEnteredPlayerName(playerName.current.value)
        playerName.current.value = ''
    }
    return (
      <section id="player">
        {/* <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'} </h2> */}
        {/* <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'} </h2> */}
        <h2>Welcome {enteredPlayerName ?? 'unknown entity'} </h2>
        {/* <h2>Welcome {playerName.current.value ?? 'unknown entity'} </h2> */}
        {/* <h2>Welcome {playerName.current ? playerName.current.value : 'unknown entity'} </h2> */}
        <p>
          <input 
            ref={playerName} 
            type="text" 
            // value={enteredPlayerName} 
            // onChange={handleChange}
          />
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
    );
  }
  