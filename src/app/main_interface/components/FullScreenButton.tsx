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
			><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
				</svg>

			</div>
		</>
	);
};

export default FullScreenButton;
