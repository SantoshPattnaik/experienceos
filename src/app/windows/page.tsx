import React, { useState } from "react";
import LoadScreen from "./components/LoadScreen";
const page = (): React.JSX.Element => {
	return (
		<div className="windows w-[100vw] h-[100vh] select-none">
			<LoadScreen />
		</div>
	);
};

export default page;
