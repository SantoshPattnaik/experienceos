import Image from "next/image";
import React from "react";

import github from "../../../public/windowsicons/GitHub.svg";
import Link from "next/link";

function page() {
	return (
		<div className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black h-screen w-screen text-center text-white flex flex-col place-items-center">
			<div className=" mt-5 flex gap-5 hover:outline rounded-3xl">
				<Link href={"/"}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6 "
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
						/>
					</svg>
				</Link>
				About us
			</div>
			<div className="bg-black size-fit rounded-3xl m-5">
				<Link
					href={"https://github.com/SantoshPattnaik/experienceos.git"}
					className="flex justify-center place-items-center gap-1"
				>
					<Image
						src={github}
						alt={""}
						height={50}
						width={50}
						className="bg-white rounded-full outline-none"
					/>
					<div className="text-white">Link to repo !</div>
				</Link>
			</div>
			<div className="w-fit text-center outline outline-white rounded-md text-white bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
				Devs
				<div className="w-max flex gap-5">
					<div className="m-20 size-fit">
						<Link href={"https://github.com/SantoshPattnaik"}>
							<div className="santosh border rounded-full h-40 w-40 hover:animate-pulse"></div>
						</Link>
						<label htmlFor="">Santosh Pattnaik</label>
					</div>

					<div className="m-20 size-fit">
						<Link href={"https://github.com/Alter2k20"}>
							<div className="ashutosh border rounded-full h-40 w-40 hover:animate-pulse"></div>
						</Link>
						<label htmlFor="">Ashutosh Mishra</label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default page;
