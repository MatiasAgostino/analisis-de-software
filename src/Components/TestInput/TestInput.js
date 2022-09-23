import React, { useState } from "react";

import Metrics from "../Metrics/Metrics";

import Classes from "./TestInput.module.css";

let cc = 0;

function TestInput() {
  const [inputCode, setInputCode] = useState("");
  const [displayMetrics, setDisplayMetrics] = useState(false);

  function inputCodeHandler(e) {
    setInputCode(e.target.value);
  }

  function proccessInformation() {
    setDisplayMetrics(true);

    cc += inputCode.split("if").length - 1;
    cc += inputCode.split("else").length - 1;
    cc += inputCode.split("for").length - 1;
    cc += inputCode.split("while").length - 1;
    cc += inputCode.split("||").length - 1;
    cc += inputCode.split("&&").length - 1;
    cc++;

    setInputCode("");
  }

  function restart() {
    cc = 0;
    setDisplayMetrics(false);
  }

  return (
    <div className={Classes.container}>
      <h2 className={Classes.title}>Test it</h2>
      <textarea
        className={Classes.textArea}
        onChange={inputCodeHandler}
        value={inputCode}
      />
      <div className={Classes.buttonContainer}>
        <button className={Classes.button} onClick={proccessInformation}>
          Submit
        </button>
        <button
          className={Classes.button}
          style={{
            backgroundColor: "#de8c45",
          }}
          onClick={restart}
        >
          Restart
        </button>
      </div>
      {displayMetrics ? (
        <Metrics infoDisplay={true} cc={cc} />
      ) : (
        <Metrics infoDisplay={false} />
      )}
    </div>
  );
}

export default TestInput;
