import React, { useState } from "react";
import data from "./data";
import "./quiz.css";

function Quiz() {
  const [, setBag] = useState();
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finalResults, setFinalResults] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const { image, options, desc } = data[index];
  /**
   * show bag to radio buttons
   * */
  const changeBag = (event) => {
    setBag(event.target.value);
    //enable next button only when a radio button is selected
    setDisabled(false);
  };

  /**
   * make all the radio buttons uncheck on each page
   * */
  const uncheckButton = () => {
    let allRadioButtons = document.querySelectorAll(".radioButtons");
    allRadioButtons.forEach((value) => (value.checked = false));
  };
  const showNextBag = () => {
    // check the data
    let bag = data[index];
    let correctOptionId = bag.options.filter((item) => item.isCorrect)[0].id;
    // what is selected by the user correct vs wrong answer
    let allRadioButtons = document.querySelectorAll(".radioButtons");
    let selectedOptionId = [...allRadioButtons].findIndex(
      (item) => item.checked
    );
    let isCorrect = correctOptionId === selectedOptionId;
    if (isCorrect) {
      setScore(score + 1);
    }
    // show next page
    if (index + 1 < data.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
      setFinalResults(true);
    }
    uncheckButton();
    setDisabled(true);
  };

  const restartQuiz = () => {
    setBag(0);
    setScore(0);
    setFinalResults(false);
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      {finalResults ? (
        <div className="final-score shadow rounded">
          <h2>
            {" "}
            {score} out of {data.length} correct{" "}
          </h2>
          <button
            className="restart-btn border-0 rounded mt-3"
            onClick={() => restartQuiz()}
          >
            {" "}
            Restart the Quiz
          </button>
        </div>
      ) : (
        <div className="quiz shadow rounded">
          <h1 className="mt-3">Are you a bag expert ?</h1>
          <h3 className="mt-5"> Choose the type of the below bag:</h3>
          <img
            src={image}
            alt={desc}
            width={300}
            className="rounded mx-auto d-block mt-3"
          ></img>
          <div className="radio-container">
            <div className="option">
              <input
                type="radio"
                id="option-one"
                name="choose"
                value="option-one"
                onChange={changeBag}
                className="radioButtons"
              />
              <label htmlFor="option-one"> {options[0].text}</label>
            </div>
            <div className="option">
              <input
                type="radio"
                id="option-two"
                name="choose"
                value="option-two"
                onChange={changeBag}
                className="radioButtons"
              />
              <label htmlFor="option-two">{options[1].text} </label>
            </div>
            <div className="option">
              <input
                type="radio"
                id="option-three"
                name="choose"
                value="option-three"
                onChange={changeBag}
                className="radioButtons"
              />
              <label htmlFor="option-three">{options[2].text} </label>
            </div>
          </div>

          <button
            className=" next-btn border-0 rounded mx-auto d-block mt-5"
            disabled={disabled}
            onClick={() => showNextBag(options.isCorrect)}
          >
            {" "}
            Next{" "}
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
