import React from "react";

function quiz() {
  return (
    <div>
      {" "}
      <h3> Choose the type of the below bag:</h3>
      <img src="redbag.jpg" alt="redbag" width={200}></img>
      <ul>
        <li>tote bag</li>
        <li>handbag</li>
        <li>crossbody</li>
      </ul>
      <button> Suubmit</button>
    </div>
  );
}

export default quiz;
