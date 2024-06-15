function StartMenu() {
	return (
		<div className=" wndows_AnimateFromBottom text-white h-[660px] w-[605px] absolute bottom-[70px] rounded-xl ml-[500px] backdrop-blur-3xl">
			<div className="mt-10 ml-5 w-[35rem]  backdrop-blur-0 bg-black/50 rounded-3xl h-8 flex items-center p-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-4"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
					/>
				</svg>
			</div>
			<div className="mt-10 flex ">
				<div>Pinned</div>
				<div>All apps</div>
			</div>

			<div></div>
		</div>
	);
}

export default StartMenu;
