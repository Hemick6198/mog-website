import React from "react";
import Image from "next/image";
import telegramLogo from "../assets/telegramIcon.png";
import twitterLogo from "../assets/tweeterIcon.png";
import tiktokLogo from "../assets/tiktokIcon.png";
import instagramLogo from "../assets/instagramIcon.png";
import mogPc2 from "../assets/screen 1.png";
import mogLogo from "../assets/logo.png";

function Contact() {
  return (
    <div className="w-full flex items-center justify-center flex-col py-32">
      <div className="flex pb-24">
        <h1 className="text-xl text-white font-vt323">Contact</h1>
      </div>
      <div className="flex w-[60%]">
        <div className="flex flex-col mx-24">
          <h2 className="text-white text-lg font-inknut">
            Mog Coin is a game-changing memecoin on Ethereum. $MOG is the
            essence of winning and success distilled into computer photons,
            wrapped into erc20 tokens, and placed directly on the ethereum
            blockchain.
          </h2>
          <h2 className="text-white text-lg font-inknut pt-12">
            $MOG is a meme coin with no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. the coin is
            completely useless and for entertainment purposes only.
          </h2>
        </div>
        <div className="w-full">
          <figure className="pl-16">
            <Image
              src={mogPc2}
              width={225}
              height={225}
              alt="mogged pc"
              className="relative"
            />
          </figure>
          <ul className="flex pt-10 w-[350px]">
            <a className="px-2">
              <Image
                src={telegramLogo}
                width={70}
                height={70}
                alt="Telegram Logo"
              />
            </a>
            <a className="px-2">
              <Image
                src={twitterLogo}
                width={70}
                height={70}
                alt="Telegram Logo"
              />
            </a>
            <a className="px-2">
              <Image
                src={tiktokLogo}
                width={70}
                height={70}
                alt="Telegram Logo"
              />
            </a>
            <a className="px-2">
              <Image
                src={instagramLogo}
                width={70}
                height={70}
                alt="Telegram Logo"
              />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
