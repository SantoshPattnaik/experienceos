import React from "react";

const page = () => {
	return (
		<React.StrictMode>
			{/* <div className="bg-slate-700 text-white w-full flex justify-between flex-row flex-wrap px-12 pt-8">
				Taskbar
			</div> */}
			<div className="windows h-full">
				<footer className="bg-zinc-50 text-center dark:bg-neutral-700 fixed w-full bottom-0">
					<div className="bg-black/5 p-4 text-center text-surface dark:text-white">
						<div>Taskbar</div>
					</div>
				</footer>
			</div>
		</React.StrictMode>
	);
};

export default page;
