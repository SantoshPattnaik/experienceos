import React from "react";
import { useState } from "react";

import Calendar from "@/app/main_interface/components/Calender";
import { LinTime } from "@/app/main_interface/components/Time";

function Menubar() {
  const [calender, setCalender] = useState("close");
  return (
    <>
      <div className="w-full bg-black">
        <nav>
          <ul className="text-white flex justify-between">
            <li className="hover:cursor-pointer pl-2">Activities</li>
            <li className="hover:cursor-pointer">
              <button
                className="outline-none"
                onClick={() => {
                  if (calender == "close") {
                    setCalender("open");
                  } else {
                    setCalender("close");
                  }
                }}
              >
                <LinTime />
              </button>
            </li>
            <li className="hover:cursor-pointer"></li>
          </ul>
        </nav>
      </div>
      <div className="bg-black/40 max-w-md text-white rounded-md mt-2 z-50 absolute left-[600px] flex justify-center">
        {/*Calender */}
        {calender == "open" ? <Calendar /> : ""}
      </div>
    </>
  );
}

export default Menubar;
