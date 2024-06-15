"use client";
import { useContext, useState } from "react";

import { SettingsContext } from "../../context/SettingsContextProvider";

// Assuming your context data has a 'render' property

function Settings() {
	const { render, setRender } = useContext(SettingsContext);
	console.log(render);

	return (
		<div
			onClick={() => {
				setRender(!render);
			}}
			className="bg-white text-black text-xl"
		>
			Settings
		</div>
	);
}

export default Settings;
