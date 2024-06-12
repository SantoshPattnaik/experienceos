"use client";
import React from "react";

const MenuContext = React.createContext({});

const MenuContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [menu, setMenu] = React.useState<string>("");

	return (
		<MenuContext.Provider value={{ menu, setMenu }}>
			{children}
		</MenuContext.Provider>
	);
};

export { MenuContextProvider, MenuContext };
