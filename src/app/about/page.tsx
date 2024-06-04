import React from "react";

function page() {
	return (
		<div className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black h-screen w-screen text-center text-white flex flex-col place-items-center">
			About us
			<div className="w-fit text-center outline outline-white rounded-md text-white">
				Contact us
				<div className="w-max flex gap-5">
					<div className="m-20 hover:cursor-pointer size-fit">
						<div className="santosh border rounded-full h-40 w-40 hover:animate-bounce animate-pulse"></div>
						<label htmlFor="">Santosh Pattnaik</label>
					</div>

					<div className="m-20 size-fit hover:cursor-pointer">
						<div className="ashutosh border rounded-full h-40 w-40 hover:animate-bounce animate-pulse"></div>
						<label htmlFor="">Ashutosh Mishra</label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default page;
