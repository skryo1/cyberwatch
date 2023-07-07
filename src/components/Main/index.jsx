import React from "react";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <main
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="600"
      data-aos-easing="ease-out"
    >
      <div className="flex items-center justify-between mb-14 max-sm:mb-5 max-w-3xl mx-auto max-md:text-center ">
        <h4 className="text-2xl max-sm:text-[18px] text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
          <b>0</b> CHEATERS CONVICTED
        </h4>
        <h4 className="text-2xl max-sm:text-[18px] text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
          INSTALLED IN OVER <b>0</b> GAMES
        </h4>
      </div>

      <p className="text-center mb-5 max-w-3xl mx-auto leading-[30px] text-xl max-sm:text-base">
        Cyberwatch is an <b>advanced anti-cheat</b> system that combines <b>human
        validation</b> and verification to effectively <b>combat cheating</b> in games.
        With a <b>dedicated team</b> and powerful tools, it swiftly reviews evidence
        and issues <b>global bans.</b> The system also provides an <b>easy-to-use bot</b> to
        look up previous convicts. <b>Cyberwatch empowers you to take
        control of cheating</b>, ensuring fair play and a level playing field for
        all.
      </p>
      <div className="flex items-center justify-center gap-4">
        <a
          href="https://discord.gg/CNUnDdgqwV"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-center bg-gradient-to-br hover:bg-gradient-to-bl max-sm:text-sm max-[340px]:text-[12px] from-green-400 to-green-600 rounded-md hover:from-green-600 hover:to-green-400  hover:bg-green-600 transition ease-in-out duration-300"
        >
          JOIN DISCORD
        </a>
        {/* <a
          href="#"
          className="px-6 py-3 text-center bg-gradient-to-br hover:bg-gradient-to-bl max-sm:text-sm max-[340px]:text-[12px] from-green-400 to-green-600 rounded-md  hover:from-green-600 hover:to-green-400 transition ease-in-out duration-300"
        >
          ADD OUR BOT
        </a> */}
        <a
          href="#"
          className="border border-green-400 text-center transition-all  border-solid max-sm:text-sm max-[340px]:text-[12px] px-6 py-3 rounded-md hover:bg-green-500  ease-in duration-300"
        >
          ADD OUR BOT
        </a>
      </div>
    </main>
  );
};

export default Main;
