import React from "react";
import { FaApple } from "react-icons/fa";
import Time from "./Time";

function Menubar() {
	return (
		<div className="bg-white/50">
			<nav className="menubar flex w-full gap-20">
				<div className="menus">
					<ul className="flex gap-5 text-[17px] font-medium">
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
				<div className="status justify-end flex-grow mr-1">
					<ul className="flex space-x-36 text-[17px] font-medium justify-end ">
						<li className="hover:cursor-pointer"></li>
						<li className="hover:cursor-pointer"></li>
						<li className="hover:cursor-pointer"></li>
						<Time />
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Menubar;
