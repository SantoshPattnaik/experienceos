import React from "react";
import Menubar from "./Menubar";
import Dock from "./Dock";
import { AppleFontMedium, AppleFontRegular } from "@/app/fonts";
import { MenuBarCloseContextProvider } from "@/app/context/MenuBarCloseContextProvider";
import { SettingsContextProvider } from "@/app/context/SettingsContextProvider";
import Application_renderer from "./Application_renderer";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const Animation = keyframes`
	from {
		opacity:0;
	}
	to {
		opacity:1;
	}
`;

const FadeIn = styled.div`
	animation: ${Animation} 1s Linear;
	background-image: url(366398.jpg);
	background-size: cover;
`;

function Desktop() {
	return (
		<MenuBarCloseContextProvider>
			<FadeIn className={`${AppleFontMedium.className} h-full`}>
				<SettingsContextProvider>
					<Menubar />
					<Application_renderer />
				</SettingsContextProvider>
				<Dock />
			</FadeIn>
		</MenuBarCloseContextProvider>
	);
}

export default Desktop;
