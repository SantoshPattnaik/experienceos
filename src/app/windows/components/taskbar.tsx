import React from "react";
import Image from "next/image";
import { WinTime } from "@/app/main_interface/components/Time";

import winstart from "../../../../public/windows/icons8-windows-11.svg";
import winbell from "../../../../public/windows/icons8-notification.svg";
import vscode from "../../../../public/windows/Visual Studio Code (VS Code).svg";
import vs from "../../../../public/windows/Visual Studio.svg";
import github from "../../../../public/windows/GitHub.svg";
import blender from "../../../../public/windows/Blender.svg";
import ae from "../../../../public/windows/After Effects.svg";
import notification from "../../../../public/windows/bell-svgrepo-com.svg";


// Taskbar Component
const Taskbar = () => {
  return (
    <footer className="text-center fixed w-full bottom-0 h-[64px] ">
      <div className="text-center text-surface text-white backdrop-blur-md bg-black backdrop-opacity-85 bg-opacity-70 flex h-fit">
        <div className="hover:cursor-pointer">
          <Image src={winbell} alt="" height={64} width={64} />
        </div>
        <div className="flex-grow flex justify-center">
          <ul className="flex justify-center gap-5 self-center">
            <li className="hover:cursor-pointer">
              <Image src={winstart} alt="" height={34} width={34} />
            </li>
            <li className="hover:cursor-pointer">
              <Image src={vscode} alt="" height={34} width={34} />
            </li>
            <li className="hover:cursor-pointer">
              <Image src={github} alt="" height={34} width={34} />
            </li>
            <li className="hover:cursor-pointer">
              <Image src={blender} alt="" height={34} width={34} />
            </li>
            <li className="hover:cursor-pointer">
              <Image src={vs} alt="" height={34} width={34} />
            </li>
            <li className="hover:cursor-pointer">
              <Image src={ae} alt="" height={34} width={34} />
            </li>
          </ul>
        </div>
        <div className="pt-2 hover:cursor-pointer">
          <WinTime />
        </div>
        <div className="flex justify-center align-middle pt-3 pl-1">
          <ul className="size-fit">
            <li className="hover:cursor-pointer">
              <Image src={notification} alt="" height={34} width={34} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Taskbar;
