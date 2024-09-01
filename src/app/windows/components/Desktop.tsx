import { MenuContextProvider } from "@/app/context/MenuContextProvider";
import DesktopShortcut from "./DesktopShortcut";
import Footer from "./Footer";
import { SettingsContextProvider } from "../../context/SettingsContextProvider";

// Assuming your context data has a 'render' property

function Desktop() {
	return (
		<div className="h-screen w-screen">
			<SettingsContextProvider>
				<DesktopShortcut />
				{/* <Settings /> */}
				<Footer />
			</SettingsContextProvider>
		</div>
	);
}

export default Desktop;
