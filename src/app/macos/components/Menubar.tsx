import React from "react";
import { FaApple, FaWifi } from "react-icons/fa";
import Time from "./Time";
import { IoMdBluetooth, IoMdSearch } from "react-icons/io";
import { FaDisplay } from "react-icons/fa6";
import { TiBatteryCharge } from "react-icons/ti";

function Menubar() {
	return (
		<>
			<div className="bg-white/50">
				<nav className="menubar flex w-full gap-20">
					<div className="menus">
						<ul className="flex gap-5 text-[17px] font-medium">
							<li className="hover:cursor-pointer">
								<ul className="text-2xl">
									{/* Apple Logo */}
									<FaApple className="ml-3" />
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
						<ul className="flex space-x-2 text-[17px] font-medium justify-end ">
							{/* Time Viewer */}
							<FaWifi className="text-2xl hover:cursor-pointer" />
							<IoMdBluetooth className="text-2xl hover:cursor-pointer" />
							<FaDisplay className="text-2xl hover:cursor-pointer" />
							<TiBatteryCharge className="text-2xl hover:cursor-pointer" />
							<IoMdSearch className="text-2xl hover:cursor-pointer" />
							<Time />
						</ul>
					</div>
				</nav>
			</div>
			<div className="absolute bg-white/50 top-7 text-center rounded left-2 p-1">
				<ul>
					<li>About</li>
					<li>Shutdown</li>
					<li>Restart</li>
				</ul>
			</div>
			<div className="absolute bg-white/50 top-7 text-center rounded left-20 p-1">
				<ul>
					<li>About</li>
					<li>Shutdown</li>
					<li>Restart</li>
				</ul>
			</div>
			<div className="absolute bg-white/50 top-7 text-center rounded left-2 p-1">
				<ul>
					<li>About</li>
					<li>Shutdown</li>
					<li>Restart</li>
				</ul>
			</div>
			<div className="absolute bg-white/50 top-7 text-center rounded left-2 p-1">
				<ul>
					<li>About</li>
					<li>Shutdown</li>
					<li>Restart</li>
				</ul>
			</div>
		</>
	);
}

export default Menubar;
