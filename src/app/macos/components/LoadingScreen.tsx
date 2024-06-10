"use client";

import React, { useEffect, useState } from "react";
import Desktop from "./Desktop";

const LoadingScreen = () => {
	const [welcome, setWelcome] = useState<boolean>(false);

	const videoEnd = () => {
		setTimeout(() => {
			setWelcome(true);
		}, 9000);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setWelcome(true);
		}, 9000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<div className={`${welcome ? "h-full visible" : "hidden"}`}>
				<Desktop />
			</div>

			<div
				className={`${
					welcome ? "hidden" : "bg-black h-full flex justify-center"
				}`}
			>
				<video width={700} autoPlay muted onEnded={videoEnd}>
					<source src="/macosicons/large.mp4" type="video/mp4" />
				</video>
			</div>
		</>
	);
};

export default LoadingScreen;
