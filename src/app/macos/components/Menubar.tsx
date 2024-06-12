"use client";
import React, {
	useState,
	useEffect,
	useRef,
	useContext,
	Dispatch,
	SetStateAction,
} from "react";
import { FaApple, FaWifi } from "react-icons/fa";
import { Time } from "../../main_interface/components/Time";
import { IoMdBluetooth, IoMdSearch } from "react-icons/io";
import { FaDisplay } from "react-icons/fa6";
import { TiBatteryCharge } from "react-icons/ti";
import Calender from "../../main_interface/components/Calender";
import System_preferences from "../apps/System_preferences";
import { MenuContext } from "@/app/context/MenuContextProvider";

interface Menubar_Options {
	id: number;
	text: string;
	separator: boolean;
	gray: boolean;
}

const apple_logo: Menubar_Options[] = [
	{ id: 1, text: "About This Mac", separator: true, gray: false },
	{ id: 2, text: "System Preferences...", separator: true, gray: false },
	{ id: 3, text: "App Store...", separator: true, gray: false },
	{ id: 4, text: "Recent Items", separator: false, gray: false },
	{ id: 5, text: "Force Quit", separator: false, gray: false },
	{ id: 6, text: "Sleep", separator: false, gray: false },
	{ id: 7, text: "Restart", separator: false, gray: false },
	{ id: 8, text: "Shutdown", separator: true, gray: false },
	{ id: 9, text: "Lock Screen", separator: false, gray: false },
	{ id: 10, text: "Log Out User...", separator: false, gray: false },
];

const finder: Menubar_Options[] = [
	{ id: 1, text: "About Finder", separator: true, gray: false },
	{ id: 2, text: "Preferences", separator: true, gray: false },
	{ id: 3, text: "Empty Trash", separator: true, gray: false },
	{ id: 4, text: "Hide Finder", separator: false, gray: false },
	{ id: 5, text: "Hide Others", separator: false, gray: false },
	{ id: 6, text: "Show All", separator: false, gray: true },
];
const file: Menubar_Options[] = [
	{ id: 1, text: "New Finder Window", separator: true, gray: false },
	{ id: 2, text: "New Folder", separator: true, gray: false },
	{ id: 3, text: "New Folder With Selection", separator: true, gray: true },
	{ id: 4, text: "New Smart Folder", separator: false, gray: false },
	{ id: 5, text: "New Tab", separator: false, gray: false },
	{ id: 6, text: "Open", separator: false, gray: true },
	{ id: 7, text: "Open With", separator: false, gray: true },
	{ id: 8, text: "Print", separator: false, gray: true },
	{ id: 9, text: "Close Window", separator: true, gray: true },
	{ id: 10, text: "Get Info", separator: false, gray: false },
	{ id: 11, text: "Rename", separator: true, gray: true },
	{ id: 12, text: "Compress", separator: true, gray: true },
	{ id: 13, text: "Duplicate", separator: false, gray: true },
	{ id: 14, text: "Make Alias", separator: false, gray: true },
	{ id: 15, text: "Quick Look", separator: false, gray: true },
	{ id: 16, text: "Show Original", separator: false, gray: true },
	{ id: 17, text: "Add to Sidebar", separator: true, gray: true },
	{ id: 18, text: "Move to Trash", separator: false, gray: true },
	{ id: 19, text: "Eject", separator: true, gray: true },
	{ id: 20, text: "Find", separator: true, gray: false },
	{ id: 21, text: "Tag", separator: false, gray: true },
];
const edit: Menubar_Options[] = [
	{ id: 1, text: "Undo", separator: false, gray: true },
	{ id: 2, text: "Redo", separator: false, gray: true },
	{ id: 3, text: "Cut", separator: false, gray: true },
	{ id: 4, text: "Copy", separator: false, gray: true },
	{ id: 5, text: "Paste", separator: false, gray: true },
	{ id: 6, text: "Select All", separator: true, gray: true },
	{ id: 7, text: "Show Clipboard", separator: true, gray: false },
	{ id: 8, text: "Start Dictation...", separator: false, gray: false },
	{ id: 9, text: "Emoji and Symbols", separator: false, gray: false },
];
const view: Menubar_Options[] = [
	{ id: 1, text: "As Icons", separator: false, gray: true },
	{ id: 2, text: "As List", separator: false, gray: true },
	{ id: 3, text: "As Columns", separator: false, gray: true },
	{ id: 4, text: "As Gallery", separator: true, gray: true },
	{ id: 5, text: "Use Stacks", separator: false, gray: false },
	{ id: 6, text: "Sort By", separator: false, gray: false },
	{ id: 7, text: "Clean Up", separator: true, gray: true },
	{ id: 8, text: "Clean Up By", separator: false, gray: true },
	{ id: 9, text: "Hide Sidebar", separator: false, gray: true },
	{ id: 10, text: "Show Preview", separator: true, gray: true },
	{ id: 11, text: "Hide Toolbar", separator: false, gray: true },
	{ id: 12, text: "Show All Tabs", separator: false, gray: true },
	{ id: 13, text: "Show Tab Bar", separator: false, gray: true },
	{ id: 14, text: "Show Path Bar", separator: false, gray: true },
	{ id: 15, text: "Show Status Bar", separator: true, gray: true },
	{ id: 16, text: "Customize Toolbar", separator: true, gray: true },
	{ id: 17, text: "Show View Options", separator: false, gray: false },
	{ id: 18, text: "Show Preview Options", separator: false, gray: false },
];
const go: Menubar_Options[] = [
	{ id: 1, text: "Back", separator: false, gray: true },
	{ id: 2, text: "Forward", separator: false, gray: true },
	{ id: 3, text: "Enclosing Folder", separator: true, gray: false },
	{ id: 4, text: "Recents", separator: false, gray: false },
	{ id: 5, text: "Documents", separator: false, gray: false },
	{ id: 6, text: "Desktop", separator: false, gray: false },
	{ id: 7, text: "Downloads", separator: false, gray: false },
	{ id: 8, text: "Home", separator: false, gray: false },
	{ id: 9, text: "Computer", separator: false, gray: false },
	{ id: 10, text: "Airdrop", separator: false, gray: false },
	{ id: 11, text: "Network", separator: false, gray: false },
	{ id: 12, text: "iCloud Drive", separator: false, gray: false },
	{ id: 13, text: "Applications", separator: false, gray: false },
	{ id: 14, text: "Utilities", separator: true, gray: false },
	{ id: 15, text: "Go To Folder", separator: false, gray: false },
	{ id: 16, text: "Connect To Server", separator: false, gray: false },
];
const window: Menubar_Options[] = [
	{ id: 1, text: "Minimize", separator: false, gray: true },
	{ id: 2, text: "Zoom", separator: false, gray: true },
	{
		id: 3,
		text: "Move Window to Left Side of Screen",
		separator: false,
		gray: true,
	},
	{
		id: 3,
		text: "Move Window to Right Side of Screen",
		separator: false,
		gray: true,
	},
	{ id: 4, text: "Cycle Through Windows", separator: true, gray: false },
	{ id: 5, text: "Show Previous Tab", separator: false, gray: true },
	{ id: 6, text: "Show Next Tab", separator: false, gray: true },
	{ id: 7, text: "Move Tab to New Window", separator: false, gray: true },
	{ id: 8, text: "Merge All Windows", separator: true, gray: true },
	{ id: 9, text: "Bring All to Front", separator: false, gray: false },
];
const help: Menubar_Options[] = [
	{ id: 1, text: "Send Finder Feedback", separator: false, gray: true },
	{ id: 2, text: "macOS", separator: false, gray: true },
];

const Menubar = () => {
	const [apple_is_clicked, setAppleIsClicked] = useState<boolean>(false);
	const [finder_is_clicked, setFinderIsClicked] = useState<boolean>(false);
	const [file_is_clicked, setFileIsClicked] = useState<boolean>(false);
	const [edit_is_clicked, setEditIsClicked] = useState<boolean>(false);
	const [view_is_clicked, setViewIsClicked] = useState<boolean>(false);
	const [go_is_clicked, setGoIsClicked] = useState<boolean>(false);
	const [window_is_clicked, setWindowIsClicked] = useState<boolean>(false);
	const [help_is_clicked, setHelpIsClicked] = useState<boolean>(false);
	const [time_is_clicked, setTimeIsClicked] = useState<boolean>(false);

	const { menu, setMenu } = useContext(MenuContext) as MenuContextProps;
	console.log(menu);
	return (
		<>
			{/* {menu} */}
			<div
				className="bg-black text-white text-xl"
				onClick={() => {
					setMenu("hello Santosh");
				}}
			>
				Test
			</div>
			<div className="bg-white/50">
				<nav className="menubar flex w-full gap-20">
					<div className="menus">
						<ul className="flex gap-5 text-[19px] font-medium">
							<li className="hover:cursor-pointer">
								<ul className="text-2xl">
									{/* Apple Logo */}
									<FaApple
										className="ml-3 mt-[1px]"
										onClick={() => {
											if (!apple_is_clicked) {
												setAppleIsClicked(true);
												setEditIsClicked(false);
												setFileIsClicked(false);
												setFinderIsClicked(false);
												setGoIsClicked(false);
												setHelpIsClicked(false);
												setViewIsClicked(false);
												setWindowIsClicked(false);
											} else {
												setAppleIsClicked(false);
											}
										}}
									/>
								</ul>
							</li>
							<li
								className="hover:cursor-pointer font-bold"
								onClick={() => {
									if (!finder_is_clicked) {
										setFinderIsClicked(true);
										setAppleIsClicked(false);
										setEditIsClicked(false);
										setFileIsClicked(false);
										setGoIsClicked(false);
										setHelpIsClicked(false);
										setViewIsClicked(false);
										setWindowIsClicked(false);
									} else {
										setFinderIsClicked(false);
									}
								}}
							>
								Finder
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() => {
									if (!file_is_clicked) {
										setFileIsClicked(true);
										setFinderIsClicked(false);
										setAppleIsClicked(false);
										setEditIsClicked(false);
										setGoIsClicked(false);
										setHelpIsClicked(false);
										setViewIsClicked(false);
										setWindowIsClicked(false);
									} else {
										setFileIsClicked(false);
									}
								}}
							>
								File
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() => {
									if (!edit_is_clicked) {
										setEditIsClicked(true);
										setFileIsClicked(false);
										setFinderIsClicked(false);
										setAppleIsClicked(false);
										setGoIsClicked(false);
										setHelpIsClicked(false);
										setViewIsClicked(false);
										setWindowIsClicked(false);
									} else {
										setEditIsClicked(false);
									}
								}}
							>
								Edit
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() => {
									if (!view_is_clicked) {
										setViewIsClicked(true);
										setEditIsClicked(false);
										setFileIsClicked(false);
										setFinderIsClicked(false);
										setAppleIsClicked(false);
										setGoIsClicked(false);
										setHelpIsClicked(false);
										setWindowIsClicked(false);
									} else {
										setViewIsClicked(false);
									}
								}}
							>
								View
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() => {
									if (!go_is_clicked) {
										setGoIsClicked(true);
										setViewIsClicked(false);
										setEditIsClicked(false);
										setFileIsClicked(false);
										setFinderIsClicked(false);
										setAppleIsClicked(false);
										setHelpIsClicked(false);
										setWindowIsClicked(false);
									} else {
										setGoIsClicked(false);
									}
								}}
							>
								Go
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() => {
									if (!window_is_clicked) {
										setWindowIsClicked(true);
										setGoIsClicked(false);
										setViewIsClicked(false);
										setEditIsClicked(false);
										setFileIsClicked(false);
										setFinderIsClicked(false);
										setAppleIsClicked(false);
										setHelpIsClicked(false);
									} else {
										setWindowIsClicked(false);
									}
								}}
							>
								Window
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() => {
									if (!help_is_clicked) {
										setHelpIsClicked(true);
										setWindowIsClicked(false);
										setGoIsClicked(false);
										setViewIsClicked(false);
										setEditIsClicked(false);
										setFileIsClicked(false);
										setFinderIsClicked(false);
										setAppleIsClicked(false);
									} else {
										setHelpIsClicked(false);
									}
								}}
							>
								Help
							</li>
						</ul>
					</div>
					<div className="status justify-end flex-grow mr-1">
						<ul className="flex space-x-2 text-[19px] font-medium justify-end ">
							{/* Time Viewer */}
							<li>
								<FaWifi className="text-2xl hover:cursor-pointer mt-0.5" />
							</li>
							<li>
								<IoMdBluetooth className="text-2xl hover:cursor-pointer mt-0.5" />
							</li>
							<li>
								<FaDisplay className="text-2xl hover:cursor-pointer mt-0.5" />
							</li>
							<li>
								<TiBatteryCharge className="text-2xl hover:cursor-pointer mt-0.5" />
							</li>
							<li>
								<IoMdSearch className="text-2xl hover:cursor-pointer mt-0.5" />
							</li>
							<div
								onClick={() => {
									if (!time_is_clicked) {
										setTimeIsClicked(true);
										setHelpIsClicked(false);
										setWindowIsClicked(false);
										setGoIsClicked(false);
										setViewIsClicked(false);
										setEditIsClicked(false);
										setFileIsClicked(false);
										setFinderIsClicked(false);
										setAppleIsClicked(false);
									} else {
										setTimeIsClicked(false);
									}
								}}
							>
								<Time />
							</div>
						</ul>
					</div>
				</nav>
			</div>
			{apple_is_clicked && (
				<div className="absolute bg-white/50 top-7 rounded left-2 pt-1 pb-1 w-56">
					<ul>
						{apple_logo.map((item) => {
							return (
								<li key={item.id}>
									<div
										className={`${
											item.gray
												? "hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2 text-gray-500"
												: "hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2"
										}`}
									>
										{item.text}
									</div>
									{item.separator ? (
										<div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
									) : null}
								</li>
							);
						})}
					</ul>
				</div>
			)}
			{finder_is_clicked && (
				<div className="absolute bg-white/50 top-7 rounded left-10 pt-1 pb-1 w-56">
					<ul>
						{finder.map((item) => {
							return (
								<li key={item.id}>
									<div
										className={`${
											item.gray
												? "hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2 text-gray-500"
												: "hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2"
										}`}
									>
										{item.text}
									</div>
									{item.separator ? (
										<div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
									) : null}
								</li>
							);
						})}
					</ul>
				</div>
			)}
			{file_is_clicked && (
				<div className="absolute bg-white/50 top-7 rounded left-28 pt-1 pb-1 w-56">
					<ul>
						{file.map((item) => {
							return (
								<li key={item.id}>
									<div
										className={`${
											item.gray
												? "hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2 text-gray-500"
												: "hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2"
										}`}
									>
										{item.text}
									</div>
									{item.separator ? (
										<div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
									) : null}
								</li>
							);
						})}
					</ul>
				</div>
			)}
			{edit_is_clicked && (
				<div className="absolute bg-white/50 top-7 rounded left-44 pt-1 pb-1 w-56">
					<ul>
						{edit.map((item) => {
							return (
								<li key={item.id}>
									<div
										className={`${
											item.gray
												? "hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2 text-gray-500"
												: "hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2"
										}`}
									>
										{item.text}
									</div>
									{item.separator ? (
										<div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
									) : null}
								</li>
							);
						})}
					</ul>
				</div>
			)}
			{view_is_clicked && (
				<div className="absolute bg-white/50 top-7 rounded left-56 pt-1 pb-1 w-56">
					<ul>
						{view.map((items) => {
							return (
								<li key={items.id}>
									<div
										className={`${
											items.gray
												? "hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2 text-gray-500"
												: "hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2"
										}`}
									>
										{items.text}
									</div>
									{items.separator ? (
										<div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
									) : null}
								</li>
							);
						})}
					</ul>
				</div>
			)}
			{go_is_clicked && (
				<div className="absolute bg-white/50 top-7 rounded left-72 pt-1 pb-1 w-56">
					<ul>
						{go.map((items) => {
							return (
								<li key={items.id}>
									<div
										className={`${
											items.gray
												? "hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2 text-gray-500"
												: "hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2"
										}`}
									>
										{items.text}
									</div>
									{items.separator ? (
										<div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
									) : null}
								</li>
							);
						})}
					</ul>
				</div>
			)}
			{window_is_clicked && (
				<div className="absolute bg-white/50 top-7 rounded left-[328px] pt-1 pb-1 w-56">
					<ul>
						{window.map((items) => {
							return (
								<li key={items.id}>
									<div
										className={`${
											items.gray
												? "hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2 text-gray-500"
												: "hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2"
										}`}
									>
										{items.text}
									</div>
									{items.separator ? (
										<div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
									) : null}
								</li>
							);
						})}
					</ul>
				</div>
			)}
			{help_is_clicked && (
				<div className="absolute bg-white/50 top-7 rounded left-[412px] pt-1 pb-1 w-56">
					<ul>
						<li>
							<div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
								Send Finder Feedback
							</div>
							<div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
						</li>
						<li>
							<div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
								macOS Help
							</div>
						</li>
					</ul>
				</div>
			)}
			<div className="absolute bg-white/50 w-fit rounded right-0 mt-7 mr-1">
				{time_is_clicked && <Calender />}
			</div>
		</>
	);
};

export default Menubar;
