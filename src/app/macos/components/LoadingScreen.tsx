"use client";

import React, { useState } from "react";
import Desktop from "./Desktop";

const LoadingScreen = () => {
	const [welcome, setWelcome] = useState<boolean>(false);

	return (
		<div className="bg-black h-full flex justify-center">
			<video width={700} autoPlay muted>
				<source src="/macosicons/large.mp4" type="video/mp4" />
			</video>

			{/* <Desktop /> */}
		</div>
	);
};

export default LoadingScreen;
