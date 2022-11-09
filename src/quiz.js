import React, { useState } from "react";
import data from "./data";
import "./quiz.css";

function Quiz() {
  const [bag, setBag] = useState("option-one");

  const [index, setIndex] = useState(0);
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
  return (
    <div>
      {" "}
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
          <label htmlFor="option-one"> {options[0].text}</label>
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
          <label htmlFor="option-two">{options[1].text} </label>
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
          <label htmlFor="option-three">{options[2].text} </label>
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
  );
}

export default Quiz;
