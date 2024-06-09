import React, { useState } from "react";
import Desktop from "./components/Desktop";
const page = (): React.JSX.Element => {
	return (
		<div className="windows w-[100vw] h-[100vh] select-none">
			<Desktop />
		</div>
	);
};

export default page;
