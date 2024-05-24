import React from "react";
import Menubar from "./components/Menubar";
import Taskbar from "./components/Taskbar";

const page = () => {
	return (
		<div className="macos h-[100vh] w-[100w] flex flex-col justify-between ">
			<Menubar />
			<Taskbar />
		</div>
	);
};

export default page