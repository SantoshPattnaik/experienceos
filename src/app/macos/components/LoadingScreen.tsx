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
			<div
				className={`${
					welcome ? "h-full visible macos_fadein" : "hidden"
				}`}
			>
				<Desktop />
			</div>

			<div
				className={`${
					welcome
						? "hidden"
						: "bg-black h-full w-full flex justify-center"
				}`}
			>
				<video width={200} autoPlay muted onEnded={videoEnd}>
					<source src="/macosicons/large.mp4" type="video/mp4" />
				</video>
				<div className="outline-1 rounded-lg h-2 w-[80px] text-white">
					<div className="loadbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
						{" "}
					</div>
				</div>
			</div>
		</>
	);
};

export default LoadingScreen;
