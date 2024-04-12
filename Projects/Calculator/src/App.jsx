import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import styles from "./App.module.css";
import { useState } from "react";
function App() {
  const [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalValue("");
    } else if (buttonText === "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newDisplayValue = calValue + buttonText;
      setCalValue(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display calValue={calValue}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
