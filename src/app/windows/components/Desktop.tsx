import { MenuContextProvider } from "@/app/context/MenuContextProvider";
import DesktopShortcut from "./DesktopShortcut";
import Footer from "./Footer";
import Settings from "./Settings";
import { SettingsContextProvider } from "../../context/SettingsContextProvider";

// import folder from "../../../../public/windowsicons/folder.png";
// import thispc from "../../../../public/windowsicons/monitor.png";
// import recycle from "../../../../public/windowsicons/icons8-recycle-bin-96.png";
// import controlp from "../../../../public/windowsicons/icons8-control-panel-96.png";

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
