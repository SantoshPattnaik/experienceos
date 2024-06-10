import React from "react";
import Desktop from "./Desktop";

function LoadScreen() {
	return (
		<>
			<div className="h-full w-full">
				<Desktop />
				<audio autoPlay>
					<source src="/windowsicons/Startup.mp3" />
				</audio>
			</div>
		</>
	);
}

export default LoadScreen;
