import React from "react";
import Taskbar from "./components/taskbar";
import Desktop from "./components/desktop";

const page = () => {
  return (
    <div className="windows w-[100vw] h-[100vh]">
      <Desktop />
    </div>
  );
};

export default page;
