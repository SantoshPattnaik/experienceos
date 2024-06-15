import React from "react";
import LoadingScreen from "./components/LoadingScreen";

const page = () => {
	return (
		<div className="h-[100vh] w-[100w] select-none">
			<LoadingScreen />
		</div>
	);
};

export default page;
