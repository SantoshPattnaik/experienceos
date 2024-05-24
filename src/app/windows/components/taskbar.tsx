import React from "react";
import Image from "next/image";
import { WinTime } from "@/app/main_interface/components/Time";

import winstart from "../../../../public/windows/winstartdark.svg";
import winbell from "../../../../public/windows/icons8-notification.svg";

const Taskbar = () => {
  return (
    <footer className="text-center fixed w-full bottom-0 h-fit ">
      <div className="p-4 text-center text-surface text-white backdrop-blur-md bg-black backdrop-opacity-85 bg-opacity-70 flex h-fit">
        <div className="starmenu flex-grow">
          <Image src={winstart} alt="" height={64} width={64} />
        </div>
        <WinTime />
        <div>
          <Image src={winbell} alt="" height={64} width={64} />
        </div>
      </div>
    </footer>
  );
};

export default Taskbar;
