import React from "react";
import Image from "next/image";

import Discord from "../../../../public/macosicons/MacosICO/CleanMyMac .svg";
import Dropbox from "../../../../public/macosicons/MacosICO/Dropbox.svg";
import firefox from "../../../../public/macosicons/MacosICO/FireFox.svg";
import jetbrains from "../../../../public/macosicons/MacosICO/JetBrains.svg";
import Notion from "../../../../public/macosicons/MacosICO/Notion - dark.svg";
import Spotify from "../../../../public/macosicons/MacosICO/Spotify.svg";
import Obsidian from "../../../../public/macosicons/MacosICO/Obsidian - dark.svg";

import figma from "../../../../public/macosicons/MacosICO/Figma - dark.svg";
import blender from "../../../../public/macosicons/MacosICO/Blender - dark.svg";
import clean from "../../../../public/macosicons/MacosICO/CleanMyMac .svg";
import proto from "../../../../public/macosicons/MacosICO/Protopie - dark.svg";
import sketch from "../../../../public/macosicons/MacosICO/Sketch -dark.svg";
import slack from "../../../../public/macosicons/MacosICO/Slack - dark.svg";
import transmit from "../../../../public/macosicons/MacosICO/Transmit.svg";

import trello from "../../../../public/macosicons/MacosICO/Trello - dark.svg";
import twitter from "../../../../public/macosicons/MacosICO/Twitter.svg";
import vlc from "../../../../public/macosicons/MacosICO/VLC - dark.svg";
import vscode from "../../../../public/macosicons/MacosICO/VSCode - dark.svg";
import skype from "../../../../public/macosicons/MacosICO/Skype - dark.svg";
import chrome from "../../../../public/macosicons/MacosICO/Chrome - dark.svg";

function LaunchPad() {
	let arr1 = [
		Discord,
		Dropbox,
		firefox,
		jetbrains,
		Notion,
		Spotify,
		Obsidian,
	];
	let arr2 = [figma, blender, clean, proto, sketch, slack, transmit];
	let arr3 = [trello, twitter, vlc, vscode, skype, chrome];
	return (
		<div className="flex flex-col w-[100vw] h-full bg-white/40 justify-center place-items-center">
			<ul className="flex justify-start w-fit">
				{arr1.map((value, key) => {
					console.log(value);
					return (
						<li key={key} className="m-2">
							<Image src={value} alt="" width={64} height={64} />
						</li>
					);
				})}
			</ul>
			<ul className="flex justify-start w-fit">
				{arr2.map((value, key) => {
					console.log(value);
					return (
						<li key={key} className="m-2">
							<Image src={value} alt="" width={64} height={64} />
						</li>
					);
				})}
			</ul>
			<ul className="flex justify-start w-fit">
				{arr3.map((value, key) => {
					console.log(value);
					return (
						<li key={key} className="m-2">
							<Image src={value} alt="" width={64} height={64} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default LaunchPad;
