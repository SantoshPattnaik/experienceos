"use client";
import { SettingsContext } from "@/app/context/SettingsContextProvider";
import React from "react";
import System_preferences from "../apps/System_preferences";

const Application_renderer = () => {
	const { render, setRender } = React.useContext(SettingsContext) as SettingsContextProps;
	return <div>{render && <System_preferences />}</div>;
};

export default Application_renderer;
