import Link from "next/link";
import React from "react";

const Main = (): React.JSX.Element => {
  return (
    <main className="bg-gradient-to-tr from-slate-800 to-red-500 h-screen w-screen text-white">
      <div className="p-20">
        <div className="text-5xl">
          <h1>EXPERIENCE OS</h1>
        </div>
        <i>The fastest way to feel the UI of differtent Operating systems</i>
      </div>

      <div className="flex  flex-col items-center justify-between ">
        <div className="pb-10">
          Choose The OS you want to use
        </div>

        {/*div that contains the cards to OSes*/}
        <div className="flex gap-20 w-fit">
          <div className="windows h-40 w-60 border-2 rounded-xl flex justify-center">
            <Link href="/windows">Windows</Link>
          </div>
          <div className="linux h-40 w-60 border-2 rounded-xl flex justify-center">
            <Link href="/linux">Linux</Link>
          </div>
          <div className="macos h-40 w-60 border-2 rounded-xl flex justify-center">
            <Link href="/macos">Mac OS</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
