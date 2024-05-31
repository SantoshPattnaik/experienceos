"use client";
import React, { useState, useEffect } from "react";
import { FaApple, FaWifi } from "react-icons/fa";
import { Time } from "../../main_interface/components/Time";
import { IoMdBluetooth, IoMdSearch } from "react-icons/io";
import { FaDisplay } from "react-icons/fa6";
import { TiBatteryCharge } from "react-icons/ti";

function Menubar() {
	const [apple_is_clicked, setAppleIsClicked] = useState<boolean>(false);
	const [finder_is_clicked, setFinderIsClicked] = useState<boolean>(false);
	const [file_is_clicked, setFileIsClicked] = useState<boolean>(false);
	const [edit_is_clicked, setEditIsClicked] = useState<boolean>(false);
	const [view_is_clicked, setViewIsClicked] = useState<boolean>(false);
	const [go_is_clicked, setGoIsClicked] = useState<boolean>(false);
	const [window_is_clicked, setWindowIsClicked] = useState<boolean>(false);
	const [help_is_clicked, setHelpIsClicked] = useState<boolean>(false);

	return (
		<>
			<div className="bg-white/50">
				<nav className="menubar flex w-full gap-20">
					<div className="menus">
						<ul className="flex gap-5 text-[17px] font-medium">
							<li className="hover:cursor-pointer">
								<ul className="text-2xl">
									{/* Apple Logo */}
									<FaApple
										className="ml-3"
										onClick={() => {
											if (!apple_is_clicked) {
												setAppleIsClicked(true);
											} else {
												setAppleIsClicked(false);
											}
										}}
									/>
								</ul>
							</li>
							<li
								className="hover:cursor-pointer"
								onClick={() => {
									if (!finder_is_clicked) {
										setFinderIsClicked(true);
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
			{apple_is_clicked && (
				<div className="absolute bg-white/50 top-7 text-center rounded left-2 p-1">
					<ul>
						<li>About</li>
						<li>Shutdown</li>
						<li>Restart</li>
					</ul>
				</div>
			)}
			{finder_is_clicked && (
				<div className="absolute bg-white/50 top-7 text-center rounded left-10 p-1">
					<ul>
						<li>About</li>
						<li>Shutdown</li>
						<li>Restart</li>
					</ul>
				</div>
			)}
			{file_is_clicked && (
				<div className="absolute bg-white/50 top-7 text-center rounded left-24 p-1">
					<ul>
						<li>About</li>
						<li>Shutdown</li>
						<li>Restart</li>
					</ul>
				</div>
			)}
			{edit_is_clicked && (
				<div className="absolute bg-white/50 top-7 text-center rounded left-36 p-1">
					<ul>
						<li>About</li>
						<li>Shutdown</li>
						<li>Restart</li>
					</ul>
				</div>
			)}
			{view_is_clicked && (
				<div className="absolute bg-white/50 top-7 text-center rounded left-52 p-1">
					<ul>
						<li>About</li>
						<li>Shutdown</li>
						<li>Restart</li>
					</ul>
				</div>
			)}
			{go_is_clicked && (
				<div className="absolute bg-white/50 top-7 text-center rounded left-64 p-1">
					<ul>
						<li>About</li>
						<li>Shutdown</li>
						<li>Restart</li>
					</ul>
				</div>
			)}
			{window_is_clicked && (
				<div className="absolute bg-white/50 top-7 text-center rounded left-80 p-1">
					<ul>
						<li>About</li>
						<li>Shutdown</li>
						<li>Restart</li>
					</ul>
				</div>
			)}
			{help_is_clicked && (
				<div className="absolute bg-white/50 top-7 text-center rounded left-[389px] p-1">
					<ul>
						<li>About</li>
						<li>Shutdown</li>
						<li>Restart</li>
					</ul>
				</div>
			)}
		</>
	);
}

export default Menubar;
