import { useState, useRef } from "react";

export default function Player() {
  const inputName = useRef();
  
  const [playerName, setPlayerName] = useState("");

  
  function handleClick() {
    setPlayerName(inputName.current.value);       // have to use .current with ref
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName + "!" : "unknown entity"}</h2>
      <p>
        <input ref={inputName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
