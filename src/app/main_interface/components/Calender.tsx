// src/components/Calendar.js

import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from "date-fns";
import "tailwindcss/tailwind.css";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  return (
    <div className="max-w-md mx-auto p-4 rounded-md">
      <div className="flex justify-between mb-4">
        <button onClick={prevMonth}>prev</button>
        <h2 className="text-xl font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button onClick={nextMonth}>next</button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-semibold">
            {day}
          </div>
        ))}
        {daysInMonth.map((date) => (
          <div key={date.toISOString()} className="text-center">
            {format(date, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
