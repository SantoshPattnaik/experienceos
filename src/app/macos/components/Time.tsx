"use client";
import React, { useState, useEffect } from "react";

const Time = () => {
	const [dateTime, setDateTime] = useState<String>(Date());
	const [ dateArr, setDateArr] = useState(dateTime.split(' ')) //Split the date string to constituents
	const [ time, setTime] = useState(dateArr[4].split(':'))
	useEffect(() => {
		const interval_id = setInterval(() => {
			setDateTime(Date())
			setDateArr(dateTime.split(' '))
			setTime(dateArr[4].split(':'))
		}, 1000);
		return () => clearInterval(interval_id);
	}, [dateTime, dateArr]);

	return (
		<>
			<li className="hover:cursor-pointer">{dateArr[0]+" "+dateArr[1]+" "+dateArr[2]+" "+time[0]+":"+time[1]}</li>
		</>
	);
};

export default Time;
