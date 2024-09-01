import React from "react";
import Menubar from "./Menubar";
import Dock from "./Dock";
import { AppleFontMedium, AppleFontRegular } from "@/app/fonts";
import { MenuBarCloseContextProvider } from "@/app/context/MenuBarCloseContextProvider";
import { SettingsContextProvider } from "@/app/context/SettingsContextProvider";
import Application_renderer from "./Application_renderer";

function Desktop() {
	return (
		<MenuBarCloseContextProvider>
			<div
				style={{
					backgroundImage: "url('366398.jpg')",
					backgroundSize: "cover",
				}}
				className={`${AppleFontMedium.className} h-full`}
			>
				<SettingsContextProvider>
					<Menubar />
					<Application_renderer />
				</SettingsContextProvider>
				<Dock />
			</div>
		</MenuBarCloseContextProvider>
	);
}

export default Desktop;
