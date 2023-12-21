import React from "react";
import dhan from "../img/dhan1.png";
import yt from "../img/youtube.png";
import insta from "../img/insta.png";
import tele from "../img/telegram.png";
function Link() {
  return (
    <div>
      <div className="flex flex-wrap gap-6 md:gap-12 w-full mt-12  sm:mt-14 justify-between items-center mx-auto  font-serif">
        <a
          href="https://join.dhan.co/?invite=MULEX99826"
          target="_blank"
          className="flex justify-between items-center mx-auto w-[250px] gap-5 text-lg rounded-lg bg-gray-900 px-3 p-2 "
        >
          <img src={dhan} alt="" className="rounded-lg w-[100px] " />
          <h1>Dhan App</h1>
        </a>
        <a
          href="https://youtube.com/@traderAjayghodela?si=2er_AP_EVwQFt5ym"
          target="_blank"
          className="flex justify-between items-center mx-auto w-[250px] gap-5 text-lg rounded-lg bg-gray-900 px-3 p-2 "
        >
          <img src={yt} alt="" className="rounded-lg w-[62px] " />
          <h1>Youtube</h1>
        </a>
        <a
          href="https://t.me/traderajayghodela/11"
          target="_blank"
          className="flex justify-between items-center mx-auto w-[250px] gap-5 text-lg rounded-lg bg-gray-900 px-3 p-2 "
        >
          <img src={tele} alt="" className="rounded-lg w-[70px] " />
          <h1>Telegram</h1>
        </a>
        <a
          href="https://instagram.com/traderajayghodela?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"
          target="_blank"
          className="flex justify-between items-center mx-auto w-[250px] gap-5 text-lg rounded-lg bg-gray-900 px-3 p-2 "
        >
          <img src={insta} alt="" className="rounded-lg w-[50px] " />
          <h1>Instgram</h1>
        </a>
      </div>
    </div>
  );
}

export default Link;
