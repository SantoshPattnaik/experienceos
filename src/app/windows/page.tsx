import React from "react";
import Desktop from "./components/Desktop";
const page = (): React.JSX.Element => {
	return (
		<div className="windows w-[100vw] h-[100vh]">
			<Desktop />
		</div>
	);
};

export default page;
