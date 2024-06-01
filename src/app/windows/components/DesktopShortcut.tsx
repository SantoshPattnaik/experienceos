import Image from "next/image";
import React from "react";

import folder from "../../../../public/windowsicons/folder.png";
import thispc from "../../../../public/windowsicons/monitor.png";
import recycle from "../../../../public/windowsicons/icons8-recycle-bin-96.png";
import controlp from "../../../../public/windowsicons/icons8-control-panel-96.png";

function DesktopShortcut() {
  return (
    <div className="flex flex-col h-fit w-fit p-3 text-white text-sm">
      <div className="hover:cursor-pointer">
        <Image src={folder} alt="folderico" height={64} width={64} />
        <label htmlFor="folderico">New folder</label>
      </div>
      <div className="hover:cursor-pointer">
        <Image src={thispc} alt="pcico" height={64} width={64} />
        <label htmlFor="pcico">This PC</label>
      </div>
      <div className="hover:cursor-pointer">
        <Image src={controlp} alt="panico" height={64} width={64} />
        <label htmlFor="panico">Control Panel</label>
      </div>
      <div className="hover:cursor-pointer">
        <Image src={recycle} alt="binico" height={64} width={64} />
        <label htmlFor="binico">Recycle Bin</label>
      </div>
      <div className="hover:cursor-pointer">
        <Image src={folder} alt="folderico" height={64} width={64} />
        <label htmlFor="folderico">jai kala</label>
      </div>
    </div>
  );
}

export default DesktopShortcut;
