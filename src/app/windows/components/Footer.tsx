"use client";
import Image from "next/image";
import React, { useState } from "react";

import winbell from "../../../../public/windowsicons/icons8-notification.svg";
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
	return (
		<>
			{/* feeds */}
			{feedState == "open" ? <Feeds /> : ""}
			{/*start menu */}
			{condition == "render" ? <StartMenu /> : ""}
			{/*Quick Settings */}
			{quickSettingsStates == "open" ? <QuickSettings /> : ""}
			{/*Calender*/}
			<div className="right-4 bottom-[70px] absolute">
				{" "}
				{calender == "open" ? <Notification /> : ""}
			</div>
			{/* Taskbar */}
			<footer className="text-center fixed w-full bottom-0 h-[64px] ">
				<div className="text-center text-surface text-white backdrop-blur-md bg-black backdrop-opacity-85 bg-opacity-70 flex h-fit">
					<div className="hover:cursor-pointer">
						<button
							className="border-none outline-none"
							onClick={() => {
								if (feedState == "close") {
									setcondition("don't render");
									setFeedState("open");
									setQuickSettingState("close");
									setCalender("close");
								} else {
									setFeedState("close");
								}
							}}
						>
							<Image
								src={winbell}
								alt=""
								height={64}
								width={64}
							/>
						</button>
					</div>
					<div className="flex-grow flex justify-center">
						<ul className="flex justify-center gap-5 self-center">
							<li>
								<button
									className="border-none outline-none"
									onClick={() => {
										if (condition == "don't render") {
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
								</button>
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
								if (chevron == "up") {
									setChevron("down");
								} else {
									setChevron("up");
								}
							}}
						>
							{chevron == "down" ? (
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
					</div>
					{/*Quick settings */}
					<div>
						<div className="pt-5 mr-4 w-fit flex">
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
					<div className=" hover:cursor-pointer text-[14px] font-bold pt-5">
						<button
							className="border-none outline-none"
							onClick={() => {
								if (calender == "close") {
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
						</button>
					</div>
					<div className="flex justify-center align-middle pt-8 pl-2 pr-5">
						<ul className="size-fit">
							<li className="hover:cursor-pointer">
								<Image
									src={notification}
									alt=""
									height={16}
									width={16}
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
