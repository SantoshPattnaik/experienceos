import React,{useState} from "react";

import Image from "next/image";

import vscode from "../../../../public/windowsicons/Visual Studio Code (VS Code).svg";
import vs from "../../../../public/windowsicons/Visual Studio.svg";
import github from "../../../../public/windowsicons/GitHub.svg";
import blender from "../../../../public/windowsicons/Blender.svg";
import ae from "../../../../public/windowsicons/After Effects.svg";

const Systray = () => {

    const [chevron, setChevron] = useState<string>("up");
	const [trayShow, setTrayShow] = useState<boolean>(false);

  return (
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
							<div className="wndows_AnimateFromBottom absolute bottom-16 pl-3 pr-3 pt-3 pb-3 rounded-xl right-52 ">
								<ul>
									<li className="hover:cursor-pointer flex space-x-4 backdrop-blur-3xl">
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
  );
};

export default Systray;
