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
    <div className="w-full flex items-center justify-center flex-col">
      <div className="flex pb-24">
        <h1 className="text-xl text-white font-vt323">Contact</h1>
      </div>
      <div className="flex w-[70%]">
        <h2 className="text-white text-lg font-inknut mr-72">
          Mog Coin is a game-changing memecoin on Ethereum. $MOG is the essence
          of winning and success distilled into computer photons, wrapped into
          erc20 tokens, and placed directly on the ethereum blockchain. <br />{" "}
          $MOG is a meme coin with no intrinsic value or expectation of
          financial return. There is no formal team or roadmap. the coin is
          completely useless and for entertainment purposes only.
        </h2>
        <div className="w-[50%]">
          <figure>
            <Image
              src={mogPc2}
              width={225}
              height={225}
              alt="mogged pc"
              className="relative"
            />
          </figure>
          <ul className="flex px-12">
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
