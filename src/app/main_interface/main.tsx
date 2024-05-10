import Link from "next/link";
import React from "react";

const Main = (): React.JSX.Element => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-20">
			<div>
				<u>Choose The OS you want to use</u>
			</div>
			<Link href="/windows">Windows</Link>
			<Link href="/linux">Linux</Link>
			<Link href="/macos">Mac OS</Link>
		</main>
	);
};

export default Main;
