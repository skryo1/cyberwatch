import React from "react";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <main
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="600"
      data-aos-easing="ease-out"
      className="mb-20"
    >
      <div className="flex items-center justify-between mb-14 max-w-3xl mx-auto max-sm:text-center">
        <h4 className="text-xl max-sm:text-[18px] text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
          50 CHEATERS CONVICTED
        </h4>
        <h4 className="text-xl max-sm:text-[18px] text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
          INSTALLED IN OVER 50 GAMES
        </h4>
      </div>

      <p className="text-center mb-5 max-w-3xl mx-auto leading-[30px] text-2xl max-sm:text-lg">
        Cyberwatch is an advanced anti-cheat system that combines human
        validation and verification to effectively combat cheating in games.
        With a dedicated team and powerful tools, it swiftly reviews evidence
        and issues global bans. The system also provides an easy-to-use bot to
        look up previous convicts. Cyberwatch empowers developers to take
        control of cheating, ensuring fair play and a level playing field for
        all.
      </p>
      <div className="flex items-center justify-center gap-4">
        <button className="px-6 py-3 bg-gradient-to-br from-green-400 to-green-600 rounded-md hover:bg-gradient-to-br hover:from-green-700 hover:to-green-600  hover:bg-green-600 transition ease-in-out duration-300">
          JOIN DISCORD
        </button>
        <button className="px-6 py-3 bg-gradient-to-br from-green-400 to-green-600 rounded-md hover:bg-gradient-to-br hover:from-green-700 hover:to-green-600 transition ease-in-out duration-300">
          ADD OUR BOT
        </button>
      </div>
    </main>
  );
};

export default Main;
