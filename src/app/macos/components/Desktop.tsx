import React from "react";

import Menubar from "./Menubar";
import Dock from "./Dock";
import { AppleFontMedium, AppleFontRegular } from "@/app/fonts";
import { MenuBarCloseContextProvider } from "@/app/context/MenuBarCloseContextProvider";
import { SettingsContextProvider } from "@/app/context/SettingsContextProvider";
import Application_renderer from "./Application_renderer";

function Desktop() {
	// const render = useContext(SettingsContext) as SettingsContextProps;
	return (
		<MenuBarCloseContextProvider>
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
