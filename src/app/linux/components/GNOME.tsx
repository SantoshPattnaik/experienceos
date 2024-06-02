"use client";
import React from "react";

import Dock from "./Dock";
import Menubar from "./Menubar";

function GNOME() {
  return (
    <div className="linux h-[100vh] w-[100vw] flex flex-col">
      <div>
        <Menubar />
      </div>
      <div className="justify-self-center h-full flex">
        <Dock />
      </div>
    </div>
  );
}

export default GNOME;
