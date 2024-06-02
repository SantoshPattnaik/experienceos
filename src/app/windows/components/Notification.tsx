import Calendar from "@/app/main_interface/components/Calender";
import React from "react";

function Notification() {
  return (
    <>
      <div className="max-w-md mx-auto p-4 bg-black/50 text-white mb-4 rounded-md min-h-72 backdrop-blur-md backdrop-opacity-90">
        Notification
      </div>
      <div className="bg-black/50 text-white backdrop-blur-md backdrop-opacity-90">
        <Calendar />
      </div>
    </>
  );
}

export default Notification;
