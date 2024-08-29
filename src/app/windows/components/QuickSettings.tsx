function QuickSettings() {
  return (
    <div className="h-[400px] w-[400px] wndows_AnimateFromBottom text-white absolute bottom-[70px] rounded-xl right-11 backdrop-blur-3xl flex flex-col justify-evenly">
      <ul>
        <li className="flex justify-around">
          <button className="w-28 h-11 rounded-sm bg-black ">wifi</button>
		  <button className="w-28 h-11 rounded-sm bg-black ">blutetooth</button>
		  <button className="w-28 h-11 rounded-sm bg-black ">airplane mode</button>
        </li>
      </ul>
      <ul>
        <li className="flex justify-around">
          <button className="w-28 h-11 rounded-sm bg-black ">battery saver</button>
		  <button className="w-28 h-11 rounded-sm bg-black ">Night light</button>
		  <button className="w-28 h-11 rounded-sm bg-black ">Accessibility</button>
        </li>
      </ul>
      <input type="range" name="brightness" id=""  /> <br />
      <input type="range" name="audio" id="" />
    </div>
  );
}

export default QuickSettings;
