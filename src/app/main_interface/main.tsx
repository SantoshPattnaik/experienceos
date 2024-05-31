import Link from "next/link";
import React from "react";
import FullScreenButton from "../components/FullScreenButton";

const Main = (): React.JSX.Element => {
	return (
		<main className="bg-gradient-to-tr from-slate-800 to-red-500 h-screen w-screen text-white">
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
		</main>
	);
};

export default Main;
