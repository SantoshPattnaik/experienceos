import DesktopShortcut from "./DesktopShortcut";
import Footer from "./Footer";
import { SettingsContextProvider } from "../../context/SettingsContextProvider";
import Settings from "./Settings";

// Assuming your context data has a 'render' property

function Desktop() {
	return (
		<div className="h-screen w-screen">
			<SettingsContextProvider>
				<DesktopShortcut />
				<Settings />
				<Footer />
			</SettingsContextProvider>
		</div>
	);
}

export default Desktop;
