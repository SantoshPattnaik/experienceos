import React from "react";

import Menubar from "./Menubar";
import Dock from "./Dock";
import { AppleFontMedium, AppleFontRegular } from "@/app/fonts";

function Desktop() {
	return (
		<div
			style={{
				backgroundImage: "url('366398.jpg')",
				backgroundSize: "cover",
			}}
			// className={`${AppleFontRegular.className} h-full`}
			className={`${AppleFontMedium.className} h-full`}
		>
			<Menubar />
			<Dock />
		</div>
	);
}

export default Desktop;
