import React from "react";
import Desktop from "./Desktop";

function LoadScreen() {
	return (
		<>
			<div className="h-fir w-fit macos_fadein">
				<Desktop />
				<audio autoPlay className="hidden">
					<source src="/windowsicons/Startup.mp3" />
				</audio>
			</div>
		</>
	);
}

export default LoadScreen;
