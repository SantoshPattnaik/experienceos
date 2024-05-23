import React from "react";

import Image from "next/image";

const Taskbar = () => {
	return (
		<footer className="text-center fixed w-full bottom-0">
			<div className="p-4 text-center text-surface text-white backdrop-blur-md bg-black backdrop-opacity-85 bg-opacity-70 flex">
				<div className="starmenu flex-grow"></div>
				<div className="w-[25vw]">{Date()}</div>
			</div>
		</footer>
	);
};

export default Taskbar;
