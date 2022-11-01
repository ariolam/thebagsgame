import React from "react";
import "./quiz.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function quiz() {
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
      <div>
        <ul className="mt-4">
          <li>
            <span className="list-icon">
              {" "}
              <FontAwesomeIcon icon={faCircle} size="xs" className="icon" />
            </span>
            <span>tote bag</span>
          </li>
          <li>
            {" "}
            <span className="list-icon">
              {" "}
              <FontAwesomeIcon icon={faCircle} size="xs" className="icon" />
            </span>
            <span>handbag</span>
          </li>

          <li>
            <span className="list-icon">
              {" "}
              <FontAwesomeIcon icon={faCircle} size="xs" className="icon" />
            </span>
            <span>crossbody</span>
          </li>
        </ul>
      </div>
      <button className="border-0 rounded mx-auto d-block mt-5"> Submit</button>
    </div>
  );
}

export default quiz;
