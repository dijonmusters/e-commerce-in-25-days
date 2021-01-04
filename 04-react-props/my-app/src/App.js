import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [totalNumOfClicks, setTotalNumOfClicks] = useState(0);

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
    </div>
  );
}

export default App;
