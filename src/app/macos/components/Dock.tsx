import Image from "next/image";
import React from "react";

import calender from "../../../../public/macosicons/cal.png";
import downloads from "../../../../public/macosicons/downloads.png";
import finder from "../../../../public/macosicons/finder.png";
import folder from "../../../../public/macosicons/folder.png";
import xcode from "../../../../public/macosicons/xcode.png";

function Dock() {
  return (
    <div className=" bg-white/55  w-fit h-[60px] self-center rounded-[25px] mb-2 pr-3 pl-3">
      <div className=" flex justify-center">
        <ul className="flex">
          {/*add more icons here */}
          <li>
            <Image src={calender} alt="" width={64} height={64} />
          </li>
          <li>
            <Image src={downloads} alt="" width={64} height={64} />
          </li>
          <li>
            <Image src={xcode} alt="" width={64} height={64} />
          </li>
          <li>
            <Image src={finder} alt="" width={64} height={64} />
          </li>
          <li>
            <Image src={folder} alt="" width={64} height={64} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dock;
