import Calendar from "@/app/main_interface/components/Calender";
import React from "react";

function Notification() {
	return (
		<>
			<div className="wndows_AnimateFromBottom max-w-md mx-auto p-4  text-white mb-4 rounded-md min-h-72 backdrop-blur-3xl ">
				Notification
			</div>
			<div className="wndows_AnimateFromBottom  text-white backdrop-blur-3xl">
				<Calendar />
			</div>
		</>
	);
}

export default Notification;
