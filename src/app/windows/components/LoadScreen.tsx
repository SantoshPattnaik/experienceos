"use client";
import React from "react";
import Desktop from "./Desktop";
import { useState } from "react";

function LoadScreen() {
	const [play, setPlay] = useState<boolean>(false);

	const Play = () => {
		setPlay(true);
	};

	return (
		<>
			<div className={`${play ? "h-full w-full" : "hidden"}`}>
				<Desktop />
			</div>

			<div className={`${play ? "-z-50" : "hidden"}`}>
				<audio autoPlay onLoad={Play}>
					<source src="/windowsicons/Startup.mp3" />
				</audio>
			</div>
		</>
	);
}

export default LoadScreen;
