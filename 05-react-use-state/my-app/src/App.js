import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Pokemon, { usePokemon } from "./components/Pokemon";

function App() {
  const [totalNumOfClicks, setTotalNumOfClicks] = useState(0);
  const { pokemon, addPokemon } = usePokemon();

  useEffect(() => {
    // the things we want to run when something changes
    if (totalNumOfClicks > 0) {
      addPokemon();
    }
  }, [totalNumOfClicks]);

  const incrementNumOfClicks = () => {
    setTotalNumOfClicks(totalNumOfClicks + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button
          title="You have clicked"
          hasClicked="false"
          incrementNumOfClicks={incrementNumOfClicks}
        />
        <Button
          title="Have you tried clicking?"
          incrementNumOfClicks={incrementNumOfClicks}
        />
        <Button
          title="Don't click this button!"
          incrementNumOfClicks={incrementNumOfClicks}
        />
        <p>Total: {totalNumOfClicks}</p>
      </header>
      <Pokemon pokemon={pokemon} />
    </div>
  );
}

export default App;
