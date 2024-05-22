import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={inter.className}>{children}Testing</body>
		</html>
	);
};

export default RootLayout;
