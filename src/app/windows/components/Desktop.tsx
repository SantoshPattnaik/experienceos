"use client";
import React, { useState } from "react";

import Image from "next/image";

import { WinTime } from "@/app/main_interface/components/Time";
import StartMenu from "./StartMenu";
import Feeds from "./Feeds";
import QuickSettings from "./QuickSettings";

import winbell from "../../../../public/windowsicons/icons8-notification.svg";
import winstart from "../../../../public/windowsicons/icons8-windows-11.svg";
import vscode from "../../../../public/windowsicons/Visual Studio Code (VS Code).svg";
import vs from "../../../../public/windowsicons/Visual Studio.svg";
import github from "../../../../public/windowsicons/GitHub.svg";
import blender from "../../../../public/windowsicons/Blender.svg";
import ae from "../../../../public/windowsicons/After Effects.svg";
import notification from "../../../../public/windowsicons/notification-bell.png";
import DesktopShortcut from "./DesktopShortcut";

// import folder from "../../../../public/windowsicons/folder.png";
// import thispc from "../../../../public/windowsicons/monitor.png";
// import recycle from "../../../../public/windowsicons/icons8-recycle-bin-96.png";
// import controlp from "../../../../public/windowsicons/icons8-control-panel-96.png";

function Desktop() {
  const [condition, setcondition] = useState("don't render");
  const [feedState, setFeedState] = useState("close");
  const [quickSettingsStates, setQuickSettingState] = useState("closed");
  return (
    <div className="w-fit">
      <DesktopShortcut />
      {/* feeds */}
      {feedState == "open" ? <Feeds /> : ""}
      {/*start menu */}
      {condition == "render" ? <StartMenu /> : ""}
      {/*Quick Settings */}
      {quickSettingsStates == "open" ? <QuickSettings /> : ""}
      <div>
        {/*task bar */}
        <footer className="text-center fixed w-full bottom-0 h-[64px] ">
          <div className="text-center text-surface text-white backdrop-blur-md bg-black backdrop-opacity-85 bg-opacity-70 flex h-fit">
            <div className="hover:cursor-pointer">
              <button
                className="border-none outline-none"
                onClick={() => {
                  if (feedState == "close") {
                    setcondition("don't render");
                    setFeedState("open");
                    setQuickSettingState("close");
                  } else {
                    setFeedState("close");
                  }
                }}
              >
                <Image src={winbell} alt="" height={64} width={64} />
              </button>
            </div>
            <div className="flex-grow flex justify-center">
              <ul className="flex justify-center gap-5 self-center">
                <li>
                  <button
                    className="border-none outline-none"
                    onClick={() => {
                      if (condition == "don't render") {
                        setcondition("render");
                        setFeedState("close");
                        setQuickSettingState("close");
                      } else {
                        setcondition("don't render");
                      }
                    }}
                  >
                    <Image src={winstart} alt="" height={32} width={32} />
                  </button>
                </li>
                <li className="hover:cursor-pointer">
                  <Image src={vscode} alt="" height={32} width={32} />
                </li>
                <li className="hover:cursor-pointer">
                  <Image src={github} alt="" height={32} width={32} />
                </li>
                <li className="hover:cursor-pointer">
                  <Image src={blender} alt="" height={32} width={32} />
                </li>
                <li className="hover:cursor-pointer">
                  <Image src={vs} alt="" height={32} width={32} />
                </li>
                <li className="hover:cursor-pointer">
                  <Image src={ae} alt="" height={32} width={32} />
                </li>
              </ul>
            </div>
            <div className=" hover:cursor-pointer text-[14px] font-bold pt-5">
              <WinTime />
            </div>
            <div className="flex justify-center align-middle pt-8 pl-2 pr-5">
              <ul className="size-fit">
                <li className="hover:cursor-pointer">
                  <Image src={notification} alt="" height={16} width={16} />
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Desktop;
