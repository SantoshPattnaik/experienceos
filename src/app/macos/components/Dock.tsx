"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

import calender from "../../../../public/macosicons/cal.png";
import downloads from "../../../../public/macosicons/downloads.png";
import finder from "../../../../public/macosicons/finder.png";
import folder from "../../../../public/macosicons/folder.png";
import xcode from "../../../../public/macosicons/xcode.png";
import appLauncher from "../../../../public/macosicons/png-clipart-launchpad-computer-icons-macos-launch-miscellaneous-blue-removebg-preview.png";
import LaunchPad from "./LaunchPad";

function Dock() {
	const [launchPad, setLaunchPad] = useState("");
	return (
		<div className="flex flex-col align-middle place-items-center ">
			<div className="bottom-[70px] absolute  h-[87%]">
				{/* Launchpad */}
				{launchPad == "open" ? <LaunchPad /> : ""}
			</div>
			<div className=" bg-white/50 w-fit h-[60px] self-center rounded-[25px] pr-3 pl-3 bottom-2 absolute">
				<div className=" flex justify-center">
					<ul className="flex">
						{/*add more icons here */}
						<li>
							<Image
								src={calender}
								alt=""
								width={64}
								height={64}
							/>
						</li>
						<li>
							<Image
								src={downloads}
								alt=""
								width={64}
								height={64}
							/>
						</li>
						<li>
							<Image src={xcode} alt="" width={64} height={64} />
						</li>
						<li>
							<Image src={finder} alt="" width={64} height={64} />
						</li>
						<li>
							<Image src={folder} alt="" width={64} height={64} />
						</li>
						<li>
							<button
								className="outline-none mb-2"
								onClick={() => {
									if (launchPad == "") {
										setLaunchPad("open");
									} else {
										setLaunchPad("");
									}
								}}
							>
								<Image
									src={appLauncher}
									alt=""
									width={60}
									height={60}
								/>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Dock;
