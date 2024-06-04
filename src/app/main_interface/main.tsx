import Link from "next/link";
import React from "react";
import FullScreenButton from "./components/FullScreenButton";

const Main = (): React.JSX.Element => {
	return (
		<main className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black h-screen w-screen text-white">
			<FullScreenButton />
			<div className="p-20">
				<div className="text-5xl">
					<h1>EXPERIENCE OS</h1>
				</div>
				<i>
					The fastest way to feel the UI of different Operating
					systems
				</i>
			</div>

			<div className="flex  flex-col items-center justify-between ">
				<div className="pb-10">Choose The OS you want to use</div>

				{/*div that contains the cards to OSes*/}
				<div className="flex gap-20 w-fit">
					<Link href="/windows">
						<div className="windows h-40 w-60 border-2 rounded-xl flex justify-center">
							Windows
						</div>
					</Link>
					<Link href="/linux">
						<div className="linux h-40 w-60 border-2 rounded-xl flex justify-center">
							Linux
						</div>
					</Link>
					<Link href="/macos">
						<div className="macos h-40 w-60 border-2 rounded-xl flex justify-center">
							Mac OS
						</div>
					</Link>
				</div>
			</div>
			<div className="bottom-4 absolute w-full h-fit flex justify-center">
				<Link
					href={"/about"}
					className="outline-none bg-white text-black rounded-2xl hover:bg-blue-700 hover:text-white"
				>
					About 😎
				</Link>
			</div>
		</main>
	);
};

export default Main;
