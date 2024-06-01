import React from "react";
import Menubar from "./components/Menubar";
import Dock from "./components/Dock";

const page = () => {
	return (
		<div className="macos h-[100vh] w-[100w] flex flex-col justify-between select-none">
			<Menubar />
			<Dock />
		</div>
	);
};

export default page;
