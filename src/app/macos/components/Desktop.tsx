import React from "react";

import Menubar from "./Menubar";
import Dock from "./Dock";

function Desktop() {
	return (
		<div
			style={{
				backgroundImage: "url('366398.jpg')",
				backgroundSize: "cover",
			}}
			className="h-full"
		>
			<Menubar />
			<Dock />
		</div>
	);
}

export default Desktop;
