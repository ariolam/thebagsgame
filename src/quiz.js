import React, { useState } from "react";
import "./quiz.css";

function Quiz() {
  const [bag, setBag] = useState("tote bag");

  const changeBag = (event) => {
    setBag(event.target.value);
  };

  return (
    <div>
      {" "}
      <h3 className="mt-5"> Choose the type of the below bag:</h3>
      <img
        src="redbag.jpg"
        alt="redbag"
        width={300}
        className="rounded mx-auto d-block mt-3"
      ></img>
      <div className="radio-container">
        <div className="option">
          <input
            type="radio"
            id="tote bag"
            name="choose"
            value="tote bag"
            checked={bag === "tote bag"}
            onChange={changeBag}
          />
          <label htmlFor="tote bag"> tote bag</label>
        </div>
        <div className="option">
          <input
            type="radio"
            id="handbag"
            name="choose"
            value="handbag"
            checked={bag === "handbag"}
            onChange={changeBag}
          />
          <label htmlFor="handbag"> handbag</label>
        </div>
        <div className="option">
          <input
            type="radio"
            id="crossbody"
            name="choose"
            value="crossbody"
            checked={bag === "crossbody"}
            onChange={changeBag}
          />
          <label htmlFor="crossbody"> crossbody</label>
        </div>
      </div>
      <button className="border-0 rounded mx-auto d-block mt-5"> Submit</button>
    </div>
  );
}

export default Quiz;
