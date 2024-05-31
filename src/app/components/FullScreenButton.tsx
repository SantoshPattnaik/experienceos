"use client";

import React from "react";

const FullScreenButton = () => {
	return (
		<>
			<div
				className="bg-white text-black w-fit hover:cursor-pointer absolute right-0 p-2 rounded-md"
				onClick={() => {
					let el = document.documentElement;
					let rfs = el.requestFullscreen;

					rfs.call(el);
				}}
			>
				FullScreen
			</div>
		</>
	);
};

export default FullScreenButton;
