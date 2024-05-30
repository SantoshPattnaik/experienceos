import React from "react";
import Dock from "./components/Dock";

const page = () => {
  return (
    <div className="linux h-[100vh] w-[100vw] flex flex-col">
      <div className="justify-self-center">
        <Dock />
      </div>
    </div>
  );
};

export default page;
