"use client";
import { createContext, useState } from "react";

export const SettingsContext = createContext({});

export function SettingsContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [render, setRender] = useState<boolean>(false);
	return (
		<SettingsContext.Provider value={{ render, setRender }}>
			{children}
		</SettingsContext.Provider>
	);
}
