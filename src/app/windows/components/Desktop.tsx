import React from "react";
import Taskbar from "./taskbar";

import folder from "../../../../public/windows/folder.png"


function Desktop() {
  return (
    <div>
      <div className="flex flex-col h-fit"></div>
      <Taskbar />
    </div>
  );
}

export default Desktop;
