import React from "react";

import Menubar from "./Menubar";
import Dock from "./Dock";
import { AppleFontMedium, AppleFontRegular } from "@/app/fonts";
import { MenuContextProvider } from "@/app/context/MenuContextProvider";

function Desktop() {
	return (
		<MenuContextProvider>
			<div
				style={{
					backgroundImage: "url('366398.jpg')",
					backgroundSize: "cover",
				}}
				className={`${AppleFontMedium.className} h-full`}
			>
				<Menubar />
				<Dock />
			</div>
		</MenuContextProvider>
	);
}

export default Desktop;
