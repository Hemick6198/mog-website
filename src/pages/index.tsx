import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import About from "@/components/About";
import MogIcon from "@/assets/logo.png";
import twitterIcon from "@/assets/icon.png";
import dexTools from "@/assets/icon-2.png";
import iconlink3 from "@/assets/icon-3.png";
import uniswap from "@/assets/icon-4.png";
import coinMarketCap from "@/assets/icon-5.png";
import etherscan from "@/assets/icon-6.png";
import uniswapLogo from "@/assets/uniswapLogo.png";
import bitgetLogo from "@/assets/bitgetLogo.png";
import PoloniexLogo from "@/assets/PoloniexLogo.png";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="m-auto w-full">
      <div className=" w-full flex items-center justify-center pt-4">
        <Nav />
      </div>
      <div className="landing__title flex flex-col justify-center items-center w-full">
        <h1 className="text-xl pt-[50px] pb-[200px] text-white font-vt323">
          The Ticker Is $MOG
        </h1>
        <div className="landing__icon--container">
          <div className="landing__mog--icon">
            <Image
              src={MogIcon}
              alt="MogIcon"
              width={500}
              height={458}
              className="relative"
            />
          </div>
          <div className="landing__links--link cursor-pointer absolute top-[800px] left-[27%]">
            <Image src={twitterIcon} alt="iconlinks" width={110} height={110} />
          </div>
          <div className="landing__links--link cursor-pointer absolute top-[600px] left-[25%]">
            <Image src={twitterIcon} alt="iconlinks" width={110} height={110} />
          </div>
          <div className="landing__links--link cursor-pointer absolute top-[400px] left-[30%]">
            <Image src={dexTools} alt="iconlinks" width={110} height={110} />
          </div>
          <div className="landing__links--link cursor-pointer absolute top-[800px] left-[66%]">
            <Image src={iconlink3} alt="iconlinks" width={110} height={110} />
          </div>
          <div className="landing__links--link cursor-pointer absolute top-[600px] left-[69%]">
            <Image src={uniswap} alt="iconlinks" width={110} height={110} />
          </div>
          <div className="landing__links--link cursor-pointer absolute top-[400px] left-[64%]">
            <Image
              src={coinMarketCap}
              alt="iconlinks"
              width={110}
              height={110}
            />
          </div>
          <div className="landing__links--link cursor-pointer absolute top-[275px] left-[47%]">
            <Image src={etherscan} alt="iconlinks" width={110} height={110} />
          </div>
        </div>
        <div className="landing__bottom--links text-[#0500FF] flex py-28 font-semibold">
          <a className="landing__bottom--link flex items-center justify-center mx-4 px-2 py-1 w-[140px] bg-[#D2D4D8] cursor-pointer">
            <h3>Uniswap</h3>
            <Image
              alt="link-logos"
              src={uniswapLogo}
              width={30}
              height={30}
              className="pl-2"
            />
          </a>
          <a
            href="https://www.bitget.com/spot/MOGUSDT"
            className="landing__bottom--link flex items-center justify-center mx-4 px-7 py-1 w-[140px] bg-[#D2D4D8]"
            target="_blank"
          >
            <h3>Bitget</h3>
            <Image
              alt="link-logos"
              src={bitgetLogo}
              width={30}
              height={30}
              className="pl-2"
            />
          </a>
          <a
            href="https://poloniex.com/trade/MOG_USDT"
            className="landing__bottom--link flex items-center justify-center mx-4 px-2 py-1 bg-[#D2D4D8] w-[140px]"
            target="_blank"
          >
            <h3>Poloniex</h3>
            <Image
              alt="link-logos"
              src={PoloniexLogo}
              width={30}
              height={30}
              className="pl-2"
            />
          </a>
          <a
            href="https://opnx.com/en/markets/1000MOG-oUSD-SWAP-LIN"
            target="_blank"
            className="landing__bottom--link flex items-center justify-center mx-4 px-2 py-1 bg-[#D2D4D8] w-[140px]"
          >
            <h3>Opnx</h3>
            <Image
              alt="link-logos"
              src={PoloniexLogo}
              width={30}
              height={30}
              className="pl-2"
            />
          </a>
        </div>
      </div>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
