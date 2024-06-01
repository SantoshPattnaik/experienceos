import React from "react";
import Image from "next/image";

import brave from "../../../../public/linuxicons/brave.svg";
import code from "../../../../public/linuxicons/code.svg";
import disk from "../../../../public/linuxicons/disk-utility.svg";
import fox from "../../../../public/linuxicons/firefox.svg";
import github from "../../../../public/linuxicons/github-desktop.svg";
import kdev from "../../../../public/linuxicons/kdevelop.svg";
import impress from "../../../../public/linuxicons/libreoffice-impress.svg";
import writer from "../../../../public/linuxicons/libreoffice-writer.svg";

function AppMenu() {
  return (
    <div className="flex-grow backdrop-blur-md bg-black/40 ml-2 flex justify-center align-middle place-items-center">
      <div className="w-[700px] h-[400px] flex justify-evenly">
        <div className="hover:cursor-pointer">
          <Image src={brave} alt="" height={64} width={64}></Image>
        </div>
        <div className="hover:cursor-pointer">
          <Image src={code} alt="" height={64} width={64}></Image>
        </div>
        <div className="hover:cursor-pointer">
          <Image src={disk} alt="" height={64} width={64}></Image>
        </div>
        <div className="hover:cursor-pointer">
          <Image src={fox} alt="" height={64} width={64}></Image>
        </div>
        <div className="hover:cursor-pointer">
          <Image src={github} alt="" height={64} width={64}></Image>
        </div>
        <div className="hover:cursor-pointer">
          <Image src={kdev} alt="" height={64} width={64}></Image>
        </div>
        <div className="hover:cursor-pointer">
          <Image src={impress} alt="" height={64} width={64}></Image>
        </div>
        <div className="hover:cursor-pointer">
          <Image src={writer} alt="" height={64} width={64}></Image>
        </div>
      </div>
    </div>
  );
}

export default AppMenu;
