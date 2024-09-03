import { MenuBarCloseContext } from "@/app/context/MenuBarCloseContextProvider";
import { SettingsContext } from "@/app/context/SettingsContextProvider";
import styled from "@emotion/styled";
import Image from "next/image";
import React, { useContext } from "react";
import { BsGlobe } from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";
import { FaHourglassHalf, FaWifi } from "react-icons/fa";
import { FiMaximize2 } from "react-icons/fi";
import { IoIosClose, IoMdBluetooth } from "react-icons/io";
import { IoCogSharp, IoFlowerOutline, IoHandLeft, IoMoon, IoNotifications, IoVolumeHigh } from "react-icons/io5";
import { MdLightMode, MdVpnLock } from "react-icons/md";
import { RiArchiveStackFill } from "react-icons/ri";
import { RxAccessibility } from "react-icons/rx";
import { VscChromeMinimize, VscSettings } from "react-icons/vsc";

const SearchInput = styled.input`
	background: url("https://cdn-icons-png.flaticon.com/512/149/149852.png") no-repeat 10px center; /* Background image */
	background-size: 10px 10px;
	
	&[type="text"] {
		width: 100%;
		background-color: rgb(239, 227, 227);
		border-radius: 7px;
	}	
	&::placeholder {
			color: rgb(150, 149, 149);
			padding-left: 25px;
	}
	}
`;

const MainDiv = styled.div`
	*::-webkit-scrollbar {
		width: 7px;
	}
	*::-webkit-scrollbar-track {
		border-radius: 2rem;
		background-color: #eae2de 0.85;
	}

	*::-webkit-scrollbar-thumb {
		background-color: #eae2de 0.85;
		border-radius: 2rem;
	}
`;

const imageLoader = ({ src }) => {
	return `https://img.icons8.com/?${src}`;
};

const System_preferences = () => {
	const { render, setRender } = useContext(SettingsContext) as SettingsContextProps;
	const menu = useContext(MenuBarCloseContext) as MenuBarCloseContextProps;
	return (
		// outer div for providing space to the application
		<MainDiv className="w-full flex justify-center pt-4" onClick={() => menu.setClose(true)}>
			{/* Application main div */}
			<div className="h-[90vh] bg-[#eae2de]/85 w-8/12 flex left-10 top-2 rounded-2xl">
				<div className="pl-4 pb-4 w-60 h-[90vh] border-r-4 border-slate-700">
					<div className="pt-6">
						<ul className="flex gap-2">
							<li className="bg-red-500 rounded-full w-3 h-3 flex justify-center items-center">
								<span
									className="opacity-0 text-[11.5px] hover:cursor-pointer hover:opacity-100"
									onClick={() => setRender(false)}
								>
									<IoIosClose />
								</span>
							</li>
							<li className="bg-[#f5c04f] rounded-full w-3 h-3 flex justify-center items-center">
								<span className="opacity-0 text-[8px] hover:cursor-pointer hover:opacity-100">
									<VscChromeMinimize />
								</span>
							</li>
							<li className="bg-[#67ce5a] rounded-full w-3 h-3 flex justify-center items-center">
								<span className="opacity-0 text-[8px] hover:cursor-pointer hover:opacity-100">
									<FiMaximize2 />
								</span>
							</li>
						</ul>
						<ul className="pt-8 pr-3">
							<li>
								<SearchInput type="text" placeholder="Search" />
							</li>
						</ul>
						<ul className="pt-5">
							<li className="flex w-full items-center">
								<div className="w-10 h-10 rounded-full border-black border-2"></div>
								<span className="pl-2">Experience Id</span>
							</li>
						</ul>
					</div>
					<div className="pt-2 mt-2 w-full h-[68vh] overflow-y-auto">
						<ul className="pt-4">
							<div className="hover:bg-blue-800 hover:w-full rounded-lg pt-[0.4rem] pb-[0.4rem] pl-1 pr-1 hover:text-white">
								<li className="w-full flex items-center gap-1 pl-1">
									<div className="bg-blue-500 p-1 rounded">
										<FaWifi style={{ color: "white" }} />
									</div>
									<span>Wi-Fi</span>
								</li>
							</div>
							<div className="hover:bg-blue-800 hover:w-full rounded-lg pt-[0.4rem] pb-[0.4rem] pl-1 pr-1 hover:text-white">
								<li className="w-full flex items-center gap-1 pl-1">
									<div className="bg-blue-500 p-1 rounded">
										<IoMdBluetooth style={{ color: "white" }} />
									</div>
									<span>Bluetooth</span>
								</li>
							</div>
							<div className="hover:bg-blue-800 hover:w-full rounded-lg pt-[0.4rem] pb-[0.4rem] pl-1 pr-1 hover:text-white">
								<li className="w-full flex items-center gap-1 pl-1">
									<div className="bg-blue-500 p-1 rounded">
										<BsGlobe style={{ color: "white" }} />
									</div>
									<span>Network</span>
								</li>
							</div>
							<div className="hover:bg-blue-800 hover:w-full rounded-lg pt-[0.4rem] pb-[0.4rem] pl-1 pr-1 hover:text-white">
								<li className="w-full flex items-center gap-1 pl-1">
									<div className="bg-blue-500 p-1 rounded">
										<MdVpnLock style={{ color: "white" }} />
									</div>
									<span>VPN</span>
								</li>
							</div>
							<div className="hover:bg-blue-800 hover:w-full rounded-lg mt-4 pt-[0.4rem] pb-[0.4rem] pl-1 pr-1 hover:text-white">
								<li className="w-full flex items-center gap-1 pl-1">
									<div className="bg-[#ec2a81] p-1 rounded">
										<IoNotifications style={{ color: "white" }} />
									</div>
									<span>Notifications</span>
								</li>
							</div>
							<div className="hover:bg-blue-800 hover:w-full rounded-xl pt-[0.4rem] pb-[0.4rem] pl-1 pr-1 hover:text-white">
								<li className="w-full flex items-center gap-1 pl-1">
									<div className="bg-[#ec2a81] p-1 rounded">
										<IoVolumeHigh style={{ color: "white" }} />
									</div>
									<span>Sound</span>
								</li>
							</div>
							<div className="hover:bg-blue-800 hover:w-full rounded-xl pt-[0.4rem] pb-[0.4rem] pl-1 pr-1 hover:text-white">
								<li className="w-full flex items-center gap-1 pl-1">
									<div className="bg-[#885adf] p-1 rounded">
										<IoMoon style={{ color: "white" }} />
									</div>
									<span>Sleep</span>
								</li>
							</div>
							<div className="hover:bg-blue-800 hover:w-full rounded-xl pt-[0.4rem] pb-[0.4rem] pl-1 pr-1 hover:text-white">
								<li className="w-full flex items-center gap-1 pl-1">
									<div className="bg-[#885adf] p-1 rounded">
										<FaHourglassHalf style={{ color: "white" }} />
									</div>
									<span>Screen Time</span>
								</li>
							</div>
							<div className="hover:bg-blue-800 hover:w-full rounded-xl mt-4 pt-[0.4rem] pb-[0.4rem] pl-1 pr-1 hover:text-white">
								<li className="w-full flex items-center gap-1 pl-1">
									<div className="bg-[#807f7f] p-1 rounded">
										<IoCogSharp style={{ color: "white" }} />
									</div>
									<span>General</span>
								</li>
							</div>
							<div className="hover:bg-blue-800 hover:w-full rounded-xl pt-[0.4rem] pb-[0.4rem] pl-1 pr-1 hover:text-white">
								<li className="w-full flex items-center gap-1 pl-1">
									<div className="bg-[#000000] p-1 rounded">
										<CgDarkMode style={{ color: "white" }} />
									</div>
									<span>Appearance</span>
								</li>
							</div>
							<div className="hover:bg-blue-800 hover:w-full rounded-xl pt-[0.4rem] pb-[0.4rem] pl-1 pr-1 hover:text-white">
								<li className="w-full flex items-center gap-1 pl-1">
									<div className="bg-blue-500 p-1 rounded">
										<IoFlowerOutline style={{ color: "white" }} />
									</div>
									<span>Wallpaper</span>
								</li>
							</div>
							<div className="hover:bg-blue-800 hover:w-full rounded-xl pt-[0.4rem] pb-[0.4rem] pl-1 pr-1 hover:text-white">
								<li className="w-full flex items-center gap-1 pl-1">
									<div className="bg-blue-500 p-1 rounded">
										<RxAccessibility style={{ color: "white" }} />
									</div>
									<span>Accessibility</span>
								</li>
							</div>
							<div className="hover:bg-blue-800 hover:w-full rounded-xl pt-[0.4rem] pb-[0.4rem] pl-1 pr-1 hover:text-white">
								<li className="w-full flex items-center gap-1 pl-1">
									<Image
										loader={imageLoader}
										src={"size=100&id=Qt3wQVf3wAeP&format=png&color=000000"}
										width={25}
										height={25}
										alt="Siri Icon"
									/>
									<span>Siri & Spotlight</span>
								</li>
							</div>
							<div className="hover:bg-blue-800 hover:w-full rounded-xl pt-[0.4rem] pb-[0.4rem] pl-1 pr-1 hover:text-white">
								<li className="w-full flex items-center gap-1 pl-1">
									<div className="bg-blue-500 p-1 rounded">
										<IoHandLeft style={{ color: "white" }} />
									</div>
									<span>Privacy & Security</span>
								</li>
							</div>
							<div className="hover:bg-blue-800 hover:w-full rounded-xl mt-4 pt-[0.4rem] pb-[0.4rem] pl-1 pr-1 hover:text-white">
								<li className="w-full flex items-center gap-1 pl-1">
									<div className="bg-black p-1 rounded">
										<RiArchiveStackFill style={{ color: "white" }} />
									</div>
									<span>Desktop & Dock</span>
								</li>
							</div>
							<div className="hover:bg-blue-800 hover:w-full rounded-xl pt-[0.4rem] pb-[0.4rem] pl-1 pr-1 hover:text-white">
								<li className="w-full flex items-center gap-1 pl-1">
									<div className="bg-blue-500 p-1 rounded">
										<MdLightMode style={{ color: "white" }} />
									</div>
									<span>Displays</span>
								</li>
							</div>
							<div className="hover:bg-blue-800 hover:w-full rounded-xl pt-[0.4rem] pb-[0.4rem] pl-1 pr-1 hover:text-white">
								<li className="w-full flex items-center gap-1 pl-1">
									<div className="bg-[#807f7f] p-1 rounded">
										<VscSettings style={{ color: "white" }} />
									</div>
									<span>Control Center</span>
								</li>
							</div>
						</ul>
					</div>
				</div>
				<div className="pt-6 w-full">
					<span className="pl-12 font-semibold">Appearance</span>

					<div className="ml-5 p-4 mr-5 mt-5 bg-[#afaaaa]/85">dsds</div>

					<div className="ml-5 p-4 mr-5 mt-2 bg-[#afaaaa]">dsds</div>
				</div>
			</div>
		</MainDiv>
	);
};

export default System_preferences;
