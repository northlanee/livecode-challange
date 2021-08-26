import React, { useState } from "react";
import styles from "./Counter.module.css";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const [counterHistory, setCounterHistory] = useState<number[]>([]);

  // const incrementHandler = (val: number) => setCounter(counter + val);
  // const decrementHandler = (val: number) => {
  //   if (counter > 0) {
  //     if (counter - val < 0) setCounter(0);
  //     else setCounter(counter - val);
  //   }
  // };

  const changeHandler = (val: number, operation: "+" | "-") => {
    const updater = (prevCounter: number) => {
      let newValue: number;
      if (prevCounter - val < 0 && operation === "-") newValue = 0;
      else newValue = operation === "+" ? prevCounter + val : prevCounter - val;
      setCounterHistory([...counterHistory, newValue]);
      return newValue;
    };

    if (operation === "+") {
      setCounter(updater);
    } else if (counter > 0) {
      if (counter - val < 0) setCounter(updater);
      else setCounter(updater);
      setCounterHistory([...counterHistory, counter]);
    }
  };

  return (
    <div className={styles.counterWrapper}>
      <div className={styles.counter}>{counter}</div>
      <div className={styles.buttons}>
        <button onClick={() => changeHandler(1, "+")}>Increment</button>
        <button onClick={() => changeHandler(1, "-")}>Decrement</button>
        <button onClick={() => changeHandler(5, "+")}>Add 5</button>
        <button onClick={() => changeHandler(5, "-")}>Minus 5</button>
      </div>

      <div>History: {counterHistory.join(" ")}</div>
      <div>
        Max value: {counterHistory.length > 0 && Math.max(...counterHistory)}
      </div>
    </div>
  );
};
