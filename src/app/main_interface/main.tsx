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
				<div className="pb-10 text-3xl">Choose The OS you want to use</div>

				{/*div that contains the cards to OSes*/}
				<div className="flex gap-20 w-fit h-fit">
					<div className="relative group">
						<div className="absolute -inset-1 blur opacity-75 rounded-xl bg-blue-600 group-hover:opacity-100 group-hover:-inset-2 transition duration-200"></div>
						<Link href="/windows">
							<div className="windows relative h-60 w-80 border-2 rounded-xl flex justify-center">
								<div className="absolute bottom-2 right-2 group-hover:scale-125 transition duration-200 ease-linear">Windows</div>
							</div>
						</Link>
					</div>
					<div className="relative group">
						<div className="absolute -inset-1 blur opacity-75 sounded-xl bg-fuchsia-800 group-hover:opacity-100 group-hover:-inset-2 transition duration-200"></div>
						<Link href="/linux">
							<div className="linux relative h-60 w-80 border-2 rounded-xl flex justify-center">
								<div className="absolute bottom-2 right-2 group-hover:scale-125 transition duration-200 ease-linear">Linux</div>
							</div>
						</Link>
					</div>
					<div className="relative group">
						<div className="absolute -inset-1 blur opacity-75 rounded-xl bg-red-900 group-hover:opacity-100 group-hover:-inset-2 transition duration-200"></div>
						<Link href="/macos">
							<div className="macos relative h-60 w-80 border-2 rounded-xl flex justify-center">
								<div className="absolute bottom-2 right-2 group-hover:scale-125 transition duration-200 ease-linear">Mac OS</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div className="bottom-4 absolute w-full h-fit flex justify-center gap-20">
				<div className="">
					<Link
						href={"/about"}
						className="outline-none p-3 bg-white text-black rounded-2xl transition hover:bg-blue-700 hover:text-white duration-1000 ease-in-out"
					>
						About 😎
					</Link>
				</div>
				<div className="">
					<Link
						href={"/feedback"}
						className="outline-none p-3 bg-white text-black rounded-2xl transition hover:bg-blue-700 hover:text-white duration-1000 ease-in-out"
					>
						Feedback 📧
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Main;
