import React from "react";
import Dock from "./components/Dock";
import Menubar from "./components/Menubar";

const page = () => {
  return (
    <div className="linux h-[100vh] w-[100vw] flex flex-col">
      <div>
        <Menubar />
      </div>
      <div className="justify-self-center h-full">
        <Dock />
      </div>
    </div>
  );
};

export default page;
