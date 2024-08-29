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

const reducer = (state: Toggle_States, action: { type: string }) => {
	switch (action.type) {
		case "toggle_apple":
			console.log(state.apple);
			return {
				...state,
				apple: !state.apple,
				finder: false,
				file: false,
				edit: false,
				view: false,
				go: false,
				window: false,
				help: false,
				time: false,
			};
		case "toggle_finder":
			return {
				...state,
				apple: false,
				finder: !state.finder,
				file: false,
				edit: false,
				view: false,
				go: false,
				window: false,
				help: false,
				time: false,
			};
		case "toggle_file":
			return {
				...state,
				apple: false,
				finder: false,
				file: !state.file,
				edit: false,
				view: false,
				go: false,
				window: false,
				help: false,
				time: false,
			};
		case "toggle_edit":
			return {
				...state,
				apple: false,
				finder: false,
				file: false,
				edit: !state.edit,
				view: false,
				go: false,
				window: false,
				help: false,
				time: false,
			};
		case "toggle_view":
			return {
				...state,
				apple: false,
				finder: false,
				file: false,
				edit: false,
				view: !state.view,
				go: false,
				window: false,
				help: false,
				time: false,
			};
		case "toggle_go":
			return {
				...state,
				apple: false,
				finder: false,
				file: false,
				edit: false,
				view: false,
				go: !state.go,
				window: false,
				help: false,
				time: false,
			};
		case "toggle_window":
			return {
				...state,
				apple: false,
				finder: false,
				file: false,
				edit: false,
				view: false,
				go: false,
				window: !state.window,
				help: false,
				time: false,
			};
		case "toggle_help":
			return {
				...state,
				apple: false,
				finder: false,
				file: false,
				edit: false,
				view: false,
				go: false,
				window: false,
				help: !state.help,
				time: false,
			};
		case "toggle_time":
			return {
				...state,
				apple: false,
				finder: false,
				file: false,
				edit: false,
				view: false,
				go: false,
				window: false,
				help: false,
				time: !state.time,
			};
		default:
			return state;
	}
};

const Menubar = () => {
	// Implementation of useReducer() hook for state management
	const states = {
		apple: false,
		finder: false,
		file: false,
		edit: false,
		view: false,
		go: false,
		window: false,
		help: false,
		time: false,
	};

	const [state, dispatch]: [Toggle_States, React.Dispatch<any>] = useReducer(
		reducer,
		states
	);

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
											dispatch({ type: "toggle_apple" });
										}}
									/>
								</ul>
							</li>
							<li
								className="hover:cursor-pointer font-bold"
								onClick={() =>
									dispatch({ type: "toggle_finder" })
								}
							>
								Finder
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() =>
									dispatch({ type: "toggle_file" })
								}
							>
								File
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() =>
									dispatch({ type: "toggle_edit" })
								}
							>
								Edit
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() =>
									dispatch({ type: "toggle_view" })
								}
							>
								View
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() => dispatch({ type: "toggle_go" })}
							>
								Go
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() =>
									dispatch({ type: "toggle_window" })
								}
							>
								Window
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() =>
									dispatch({ type: "toggle_help" })
								}
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
								onClick={() =>
									dispatch({ type: "toggle_time" })
								}
							>
								<Time />
							</div>
						</ul>
					</div>
				</nav>
			</div>
			{state.apple && (
				<div className="absolute bg-white/50 top-14 rounded left-2 pt-1 pb-1 w-56">
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
			{state.finder && (
				<div className="absolute bg-white/50 top-14 rounded left-10 pt-1 pb-1 w-56">
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
			{state.file && (
				<div className="absolute bg-white/50 top-14 rounded left-28 pt-1 pb-1 w-56">
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
			{state.edit && (
				<div className="absolute bg-white/50 top-14 rounded left-44 pt-1 pb-1 w-56">
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
			{state.view && (
				<div className="absolute bg-white/50 top-14 rounded left-56 pt-1 pb-1 w-56">
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
			{state.go && (
				<div className="absolute bg-white/50 top-14 rounded left-72 pt-1 pb-1 w-56">
					<ul>
						{go.map((items) => {
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
			{state.window && (
				<div className="absolute bg-white/50 top-14 rounded left-[328px] pt-1 pb-1 w-56">
					<ul>
						{window.map((items) => {
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
			{state.help && (
				<div className="absolute bg-white/50 top-14 rounded left-[412px] pt-1 pb-1 w-56">
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
			<div className="absolute bg-white/50 w-fit rounded right-0 mt-1 mr-1">
				{state.time && <Calender />}
			</div>
		</>
	);
};

export default Menubar;
