"use client";
import React from "react";

const MenuBarCloseContext = React.createContext<MenuBarCloseContextProps | null>(null);

const MenuBarCloseContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [close, setClose] = React.useState<boolean>(false);

	return <MenuBarCloseContext.Provider value={{ close, setClose }}>{children}</MenuBarCloseContext.Provider>;
};

export { MenuBarCloseContextProvider, MenuBarCloseContext };
