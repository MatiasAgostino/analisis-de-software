import React from "react";

import Classes from "./Classes.module.css";

function Metrics(props) {
  return (
    <div
      className={props.infoDisplay ? Classes.containerIn : Classes.containerOut}
    >
      <p className={Classes.metric}>Cyclomatic Complexity</p>
      <p className={Classes.parameter}>{props.cc}</p>
    </div>
  );
}

export default Metrics;
