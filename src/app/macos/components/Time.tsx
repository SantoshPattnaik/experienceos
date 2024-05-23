"use client";
import React, { useState, useEffect } from "react";

const Time = () => {
	const [time, setTime] = useState<Date>(new Date());
	useEffect(() => {
		const interval_id = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(interval_id);
	}, []);

	return (
		<>
			<li className="hover:cursor-pointer">{time.toString()}</li>
		</>
	);
};

export default Time;
