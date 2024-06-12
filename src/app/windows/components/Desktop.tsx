import React from "react";

import DesktopShortcut from "./DesktopShortcut";
import Footer from "./Footer";

function Desktop() {
	return (
		<div className="h-screen w-screen" style={{ fontFamily: "Segoe UI" }}>
			<DesktopShortcut />
			<Footer />
		</div>
	);
}

export default Desktop;
