import React from "react";
import GNOME from "./components/GNOME";

const page = () => {
	return (
		<div className="linux h-[100vh] w-[100vw] flex flex-col select-none">
			<GNOME />
		</div>
	);
};

export default page;
