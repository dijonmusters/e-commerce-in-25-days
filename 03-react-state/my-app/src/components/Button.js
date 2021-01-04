import { useState } from "react";

const Button = () => {
  const [numOfClicks, setNumOfClicks] = useState(0);

  const handleClick = () => {
    setNumOfClicks(numOfClicks + 1);
  };

  console.log(numOfClicks);

  return <button onClick={handleClick}>clicked {numOfClicks}</button>;
};

export default Button;
