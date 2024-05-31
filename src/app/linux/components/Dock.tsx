import React from "react";
import Image from "next/image";

import brave from "../../../../public/linuxicons/brave.svg";
import code from "../../../../public/linuxicons/code.svg";
import disk from "../../../../public/linuxicons/disk-utility.svg";
import fox from "../../../../public/linuxicons/firefox.svg";
import github from "../../../../public/linuxicons/github-desktop.svg";
import kdev from "../../../../public/linuxicons/kdevelop.svg";
import impress from "../../../../public/linuxicons/libreoffice-impress.svg";
import writer from "../../../../public/linuxicons/libreoffice-writer.svg";

function Dock() {
	return (
		<div className="text-white flex flex-col bg-black/25 h-[400px] w-fit p-3 rounded-2xl mt-40 ml-2 justify-between">
			<div className="hover:cursor-pointer">
				<Image src={brave} alt="" height={32} width={32}></Image>
			</div>
			<div className="hover:cursor-pointer">
				<Image src={code} alt="" height={32} width={32}></Image>
			</div>
			<div className="hover:cursor-pointer">
				<Image src={disk} alt="" height={32} width={32}></Image>
			</div>
			<div className="hover:cursor-pointer">
				<Image src={fox} alt="" height={32} width={32}></Image>
			</div>
			<div className="hover:cursor-pointer">
				<Image src={github} alt="" height={32} width={32}></Image>
			</div>
			<div className="hover:cursor-pointer">
				<Image src={kdev} alt="" height={32} width={32}></Image>
			</div>
			<div className="hover:cursor-pointer">
				<Image src={impress} alt="" height={32} width={32}></Image>
			</div>
			<div className="hover:cursor-pointer">
				<Image src={writer} alt="" height={32} width={32}></Image>
			</div>
		</div>
	);
}

export default Dock;
