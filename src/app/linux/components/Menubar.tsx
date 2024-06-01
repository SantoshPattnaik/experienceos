import { LinTime } from "@/app/main_interface/components/Time";
import React from "react";

function Menubar() {
	return (
		<div className="w-full bg-black">
			<nav>
				<ul className="text-white flex justify-between">
					<li className="hover:cursor-pointer pl-2">Activities</li>
					<li className="hover:cursor-pointer">
						<LinTime />
					</li>
					<li className="hover:cursor-pointer"></li>
				</ul>
			</nav>
		</div>
	);
}

export default Menubar;
