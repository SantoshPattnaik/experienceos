import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Experience OS",
	description:
		"React based application to get the feeling of all the popular OSes in the market",
	applicationName: "Experience OS",
	keywords: [
		"linux",
		"macos",
		"windows",
		"web linux",
		"web macos",
		"web windows",
	],
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
