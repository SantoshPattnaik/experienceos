import Image from "next/image";

import {
  BiBluetooth,
  BiWifi,
  BiSolidBatteryFull,
  BiAccessibility,
} from "react-icons/bi";
import airplane from "../../../../public/windowsicons/uiicons/icons8-airplane-32.png";
import chaernavon from "../../../../public/windowsicons/uiicons/right_chaveron.svg";
import sun from "../../../../public/windowsicons/uiicons/brightness.svg";
import sound from "../../../../public/windowsicons/uiicons/volume.svg";

function QuickSettings() {
  return (
    <div className="h-[400px] w-[400px] wndows_AnimateFromBottom text-white absolute bottom-[70px] rounded-xl right-11 backdrop-blur-3xl flex flex-col justify-evenly">
      <ul>
        <li className="flex justify-around">
          <div className="bg-blue-400 rounded-lg">
            <button className="w-12 h-11 hover:bg-blue-300 ">
              <BiWifi />
            </button>
            <button className="w-12 h-11 ">
              <Image src={chaernavon} alt="cherno" />
            </button>
          </div>
          <div className="bg-blue-400 rounded-lg">
            <button className="w-12 h-11 rounded-lg ">
              <BiBluetooth />
            </button>
            <button className="w-12 h-11 ">
              <Image src={chaernavon} alt="cherno" />
            </button>
          </div>
          <div className="bg-blue-400 rounded-lg">
            <button className="w-24 h-11 rounded-lg ">
              <Image src={airplane} alt="airplane" />
            </button>
          </div>
        </li>
      </ul>
      <ul>
        <li className="flex justify-around">
          <div className="bg-blue-400 rounded-lg">
            <button className="w-24 h-11  ">
              <BiSolidBatteryFull />
            </button>
          </div>
          <div className="bg-blue-400 rounded-lg">
            <button className="w-24 h-11  ">blutetooth</button>
          </div>
          <div className="bg-blue-400 rounded-lg">
            <button className="w-24 h-11 flex ">
              <BiAccessibility />
              <button className="w-12 h-11 ">
                <Image src={chaernavon} alt="cherno" />
              </button>
            </button>
          </div>
        </li>
      </ul>
      <div className="flex justify-evenly">
        <label htmlFor="brightness">
          <Image src={sun} alt="bright" />
        </label>
        <input type="range" name="brightness" id="" />
      </div>{" "}
      <br />
     <div className="flex justify-evenly"> 
      <Image src={sound} alt="sound " />
      <input type="range" name="audio" id="" /></div>
    </div>
  );
}

export default QuickSettings;
