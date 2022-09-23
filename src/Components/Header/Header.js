import React from "react";

import Classes from "./Header.module.css";

function Header() {
  return (
    <div className={Classes.container}>
      <h1 className={Classes.title}>
        Don't do it, <br />
        before you test it. <br />
        <span className={Classes.title_special}>Testing application</span>
      </h1>
    </div>
  );
}

export default Header;
