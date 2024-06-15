"use client";
import Image from "next/image";
import React, { useState } from "react";

import winbell from "../../../../public/windowsicons/uiicons/Windows-11-widgets-icon.png";
import winstart from "../../../../public/windowsicons/icons8-windows-11.svg";
import vscode from "../../../../public/windowsicons/Visual Studio Code (VS Code).svg";
import vs from "../../../../public/windowsicons/Visual Studio.svg";
import github from "../../../../public/windowsicons/GitHub.svg";
import blender from "../../../../public/windowsicons/Blender.svg";
import ae from "../../../../public/windowsicons/After Effects.svg";
import notification from "../../../../public/windowsicons/notification-bell.png";

import StartMenu from "./StartMenu";
import Feeds from "./Feeds";
import QuickSettings from "./QuickSettings";
import Notification from "./Notification";

import { WinTime } from "@/app/main_interface/components/Time";

const Footer = () => {
	const [condition, setcondition] = useState<string>("don't render");
	const [feedState, setFeedState] = useState<string>("close");
	const [quickSettingsStates, setQuickSettingState] =
		useState<string>("closed");
	const [calender, setCalender] = useState<string>("closed");
	const [chevron, setChevron] = useState<string>("up");
	const [trayShow, setTrayShow] = useState<boolean>(false);
	return (
		<>
			{/* feeds */}
			{feedState === "open" ? <Feeds /> : ""}
			{/*start menu */}
			{condition === "render" ? <StartMenu /> : ""}
			{/*Quick Settings */}
			{quickSettingsStates === "open" ? <QuickSettings /> : ""}
			{/*Calender*/}
			<div className="right-4 bottom-[70px] absolute">
				{" "}
				{calender === "open" ? <Notification /> : ""}
			</div>
			{/* Taskbar */}
			<footer className="text-center fixed w-full bottom-0 ">
				<div className="text-center text-surface text-white backdrop-blur-3xl flex h-fit">
					<div>
						<div
							onClick={() => {
								if (feedState === "close") {
									setcondition("don't render");
									setFeedState("open");
									setQuickSettingState("close");
									setCalender("close");
								} else {
									setFeedState("close");
								}
							}}
						>
							<div className=" text-center w-56">
								<Image
									src={winbell}
									alt=""
									height={63}
									width={63}
									className="hover:cursor-pointer pl-4 pt-1 pb-1"
								/>
							</div>
						</div>
					</div>
					<div className="flex-grow flex justify-center">
						<ul className="flex gap-5 self-center">
							<li className=" hover:cursor-pointer">
								<div
									onClick={() => {
										if (condition === "don't render") {
											setcondition("render");
											setFeedState("close");
											setQuickSettingState("close");
											setCalender("close");
										} else {
											setcondition("don't render");
										}
									}}
								>
									<Image
										src={winstart}
										alt=""
										height={32}
										width={32}
									/>
								</div>
							</li>
							<li className="hover:cursor-pointer">
								<Image
									src={vscode}
									alt=""
									height={32}
									width={32}
								/>
							</li>
							<li className="hover:cursor-pointer">
								<Image
									src={github}
									alt=""
									height={32}
									width={32}
								/>
							</li>
							<li className="hover:cursor-pointer">
								<Image
									src={blender}
									alt=""
									height={32}
									width={32}
								/>
							</li>
							<li className="hover:cursor-pointer">
								<Image src={vs} alt="" height={32} width={32} />
							</li>
							<li className="hover:cursor-pointer">
								<Image src={ae} alt="" height={32} width={32} />
							</li>
						</ul>
					</div>
					{/* Background tasks quick qccess */}
					<div className="pt-5 mr-4">
						<div
							onClick={() => {
								if (chevron === "up") {
									setChevron("down");
									setTrayShow(true);
								} else {
									setChevron("up");
									setTrayShow(false);
								}
							}}
						>
							{chevron === "down" ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="size-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m19.5 8.25-7.5 7.5-7.5-7.5"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="size-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m4.5 15.75 7.5-7.5 7.5 7.5"
									/>
								</svg>
							)}
						</div>
						{/* System Tray */}
						{trayShow && (
							<div className="wndows_AnimateFromBottom absolute bottom-16 pl-3 pr-3 pt-3 pb-3 rounded-xl right-52">
								<ul className="backdrop-blur-3xl">
									<li className="hover:cursor-pointer flex space-x-4">
										<Image
											src={vscode}
											alt=""
											height={18}
											width={18}
										/>
										<Image
											src={github}
											alt=""
											height={18}
											width={18}
										/>
										<Image
											src={blender}
											alt=""
											height={18}
											width={18}
										/>
									</li>
									<li className="hover:cursor-pointer flex space-x-4 mt-3">
										<Image
											src={vs}
											alt=""
											height={18}
											width={18}
										/>
										<Image
											src={ae}
											alt=""
											height={18}
											width={18}
										/>
									</li>
								</ul>
							</div>
						)}
					</div>
					{/*Quick settings */}
					<div>
						<div className="pt-5 mr-4 w-fit flex space-x-3">
							{/* Wifi Button */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
								/>
							</svg>
							{/* Volume Button */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
								/>
							</svg>
						</div>
					</div>
					<div className="hover:cursor-pointer text-[14px] font-bold mt-3 mr-3">
						<div
							className=""
							onClick={() => {
								if (calender === "close") {
									setcondition("don't render");
									setFeedState("close");
									setQuickSettingState("close");
									setCalender("open");
								} else {
									setCalender("close");
								}
							}}
						>
							<WinTime />
						</div>
					</div>
					<div className="flex justify-center mt-6">
						<ul>
							<li className="hover:cursor-pointer mr-4">
								<Image
									src={notification}
									alt=""
									height={19}
									width={17}
								/>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
