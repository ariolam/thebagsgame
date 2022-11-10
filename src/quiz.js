import React, { useState } from "react";
import data from "./data";
import "./quiz.css";

function Quiz() {
  const [bag, setBag] = useState("option-one");
  const [index, setIndex] = useState(0);
  const [finalScore, setFinalScore] = useState(false);

  const { image, options, desc } = data[index];

  const changeBag = (event) => {
    setBag(event.target.value);
  };

  const showNextBag = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return newIndex;
    });
  };
  const chooseOption = (isCorrect) => {
    console.log(isCorrect);
  };

  return (
    <div>
      {finalScore ? (
        <div className="final-score">
          <h2> Your score is ...</h2>
          <button className="restart-btn border-0 rounded mt-3">
            {" "}
            Restart the Quiz
          </button>
        </div>
      ) : (
        <div>
          <h1 className="mt-5">Are you a bag expert ?</h1>
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
                checked={bag === "option-one"}
                onChange={changeBag}
              />
              <label
                htmlFor="option-one"
                onClick={() => chooseOption(options[0].isCorrect)}
              >
                {" "}
                {options[0].text}
              </label>
            </div>
            <div className="option">
              <input
                type="radio"
                id="option-two"
                name="choose"
                value="option-two"
                checked={bag === "option-two"}
                onChange={changeBag}
              />
              <label
                htmlFor="option-two"
                onClick={() => chooseOption(options[1].isCorrect)}
              >
                {options[1].text}{" "}
              </label>
            </div>
            <div className="option">
              <input
                type="radio"
                id="option-three"
                name="choose"
                value="option-three"
                checked={bag === "option-three"}
                onChange={changeBag}
              />
              <label
                htmlFor="option-three"
                onClick={() => chooseOption(options[2].isCorrect)}
              >
                {options[2].text}{" "}
              </label>
            </div>
          </div>

          <button
            className=" next-btn border-0 rounded mx-auto d-block mt-5"
            onClick={showNextBag}
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
