"use client";
import React, { useEffect, useContext, useReducer } from "react";
import { FaApple, FaWifi } from "react-icons/fa";
import { Time } from "../../main_interface/components/Time";
import { IoMdBluetooth, IoMdSearch } from "react-icons/io";
import { FaDisplay } from "react-icons/fa6";
import { TiBatteryCharge } from "react-icons/ti";
import Calender from "../../main_interface/components/Calender";
import System_preferences from "../apps/System_preferences";
import { MenuBarCloseContext } from "@/app/context/MenuBarCloseContextProvider";
import { SettingsContext } from "@/app/context/SettingsContextProvider";
import { apple_logo, finder, file, edit, view, go, window, help } from "@/app/macos/components/Menubar_Options";

type Toggle_States = {
	apple: boolean;
	finder: boolean;
	file: boolean;
	edit: boolean;
	view: boolean;
	go: boolean;
	window: boolean;
	help: boolean;
	time: boolean;
};

const Menubar = () => {
	const menu = useContext(MenuBarCloseContext) as MenuBarCloseContextProps;
	const reducer = (state: Toggle_States, action: { type: string }) => {
		switch (action.type) {
			case "toggle_apple":
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
			case "close-all":
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
					time: false,
				};
			default:
				return state;
		}
	};

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

	const [state, dispatch]: [Toggle_States, React.Dispatch<any>] = useReducer(reducer, states);

	const { render, setRender } = useContext(SettingsContext) as SettingsContextProps;

	useEffect(() => {
		if (menu.close) {
			dispatch({ type: "close-all" });
		}
	}, [menu.close]);

	return (
		<>
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
											menu.setClose(false);
											dispatch({ type: "toggle_apple" });
										}}
									/>
								</ul>
							</li>
							<li
								className="hover:cursor-pointer font-bold"
								onClick={() => {
									menu.setClose(false);
									dispatch({ type: "toggle_finder" });
								}}
							>
								Finder
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() => {
									menu.setClose(false);
									dispatch({ type: "toggle_file" });
								}}
							>
								File
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() => {
									menu.setClose(false);
									dispatch({ type: "toggle_edit" });
								}}
							>
								Edit
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() => {
									menu.setClose(false);
									dispatch({ type: "toggle_view" });
								}}
							>
								View
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() => {
									menu.setClose(false);
									dispatch({ type: "toggle_go" });
								}}
							>
								Go
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() => {
									menu.setClose(false);
									dispatch({ type: "toggle_window" });
								}}
							>
								Window
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() => {
									menu.setClose(false);
									dispatch({ type: "toggle_help" });
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
									menu.setClose(false);
									dispatch({ type: "toggle_time" });
								}}
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
