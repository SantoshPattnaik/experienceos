import React from "react";
import { FaApple } from "react-icons/fa";

function Menubar() {
	return (
		<div className="bg-black/35 text-white">
			<nav className="menubar flex w-full gap-20">
				<div className="menus">
					<ul className="flex gap-5 text-[18px] font-medium">
						<li className="hover:cursor-pointer">
							<ul className="text-2xl">
								<FaApple />
							</ul>
						</li>
						<li className="hover:cursor-pointer">Finder</li>
						<li className="hover:cursor-pointer">File</li>
						<li className="hover:cursor-pointer">Edit</li>
						<li className="hover:cursor-pointer">View</li>
						<li className="hover:cursor-pointer">Go</li>
						<li className="hover:cursor-pointer">Window</li>
						<li className="hover:cursor-pointer">Help</li>
					</ul>
				</div>
				<div className="status">
					<ul className="flex space-x-36 text-[18px] font-medium justify-end">
						<li className="hover:cursor-pointer"></li>
						<li className="hover:cursor-pointer"></li>
						<li className="hover:cursor-pointer"></li>
						<li className="hover:cursor-pointer">{Date()}</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Menubar;
