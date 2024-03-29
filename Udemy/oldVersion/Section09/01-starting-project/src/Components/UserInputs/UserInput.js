import React, { useState } from "react";
import classes from "./UserInput.module.css";

const initialUserInput = {
  "current-savings": 10000, //특수문자 - 를 사용하기 위해 ""를 사용 ""를 사용 안하고 싶다면 currentSavings 라고 하면 됨
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};
const UserInput = (props) => {
  const [userInput, setUerInput] = useState(initialUserInput);

  const submitHandler = (e) => {
    e.preventDefault();

    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUerInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setUerInput((prev) => {
      return {
        ...prev, // 기존 값
        [input]: +value, // 새로운 값 덮어쓰기 , [] 는 initialUerInput 에서 "" 를 사용했기 때문, "+" 는 문자열을 숫자로 변환한다.
      };
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={(e) => {
                inputChangeHandler("current-savings", e.target.value);
              }}
              value={userInput["current-savings"]}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={(e) => {
                inputChangeHandler("yearly-contribution", e.target.value);
              }}
              value={userInput["yearly-contribution"]}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(e) => {
                inputChangeHandler("expected-return", e.target.value);
              }}
              value={userInput["expected-return"]}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={(e) => {
                inputChangeHandler("duration", e.target.value);
              }}
              value={userInput["duration"]}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className={classes.actions}>
          <button
            onClick={resetHandler}
            type="reset"
            className={classes.buttonAlt}
          >
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default UserInput;
