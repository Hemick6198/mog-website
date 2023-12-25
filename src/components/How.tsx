import React from "react";

function How() {
  return (
    <div className="w-full flex items-center justify-center flex-col py-32 px-48">
      <div className="flex pb-24">
        <h1 className="text-xl text-white font-vt323">How To Buy</h1>
      </div>
      <div className="justify-around flex flex-row w-[90%] flex-wrap">
        <div className="flex flex-row w-[500px] h-[260px] my-12">
        <div className="border border-black ">
          <div className="  h-full w-full border-2 border-l-white border-t-white border-b-cyan-400 border-r-cyan-400 bg-[#E3DFDC]">
            <div className=" text-white bg-gradient-to-r from-[#54F0D8] to-[#FBEF89] text-xxxl border-2 border-black py-3 px-3">
              Create a wallet
            </div>
            <p className="text-black px-3 pt-4 ">
              download metamask or your wallet of choice from the app store or
              google play store for free. Desktop users, download the google
              chrome extension by going to metamask.io.
            </p>
            </div>
            </div>
        </div>
        <div className="flex flex-row w-[500px] h-[260px] my-12">
        <div className="border border-black ">
          <div className=" border-2 h-full w-full  bg-[#E3DFDC] border-l-white border-t-white border-b-cyan-400 border-r-cyan-400">
            <div className=" text-white bg-gradient-to-r from-[#54F0D8] to-[#FBEF89] text-xxxl border-2 border-black py-3 px-3">
              Get Some ETH
            </div>
            <p className="text-black px-3 pt-4 bg-[#E3DFDC] ">
              have ETH in your wallet to switch to $MOG. If you don’t have any
              ETH, you can buy directly on Flooz with your credit card down
              below or metamask, transfer from another wallet, or buy on another
              exchange and send it to your wallet.
            </p>
          </div>
          </div>

        </div>

        <div className="flex flex-row w-[500px] h-[260px] my-12">
        <div className="border border-black ">
          <div className=" border-2 h-full w-full border-l-white border-t-white border-b-cyan-400 border-r-cyan-400 bg-[#E3DFDC]">
            <div className=" text-white bg-gradient-to-r from-[#54F0D8] to-[#FBEF89] text-xxxl border-2 border-black py-3 px-3">
              Go to Uniswap
            </div>
            <p className="text-black px-3 pt-4 bg-[#E3DFDC] ">
              connect to Uniswap. Go to app.uniswap.org in google chrome or on
              the browser inside your Metamask app. Connect your wallet. Paste
              the $MOG token address into Uniswap, select MOG, and confirm. When
              Metamask prompts you for a wallet signature, sign.
            </p>
          </div>
        </div>
        </div>

        <div className="flex flex-row w-[500px] h-[260px] my-12">
        <div className="border border-black ">
          <div className=" border-2 h-full w-full border-l-white border-t-white border-b-cyan-400 border-r-cyan-400 bg-[#E3DFDC]">
            <div className=" text-white bg-gradient-to-r from-[#54F0D8] to-[#FBEF89] text-xxxl border-2 border-black py-3 px-3">
              Switch ETH for $MOG
            </div>
            <p className="text-black px-3 pt-4 bg-[#E3DFDC] ">
              switch ETH for $MOG. We have ZERO taxes so you don’t need to worry
              about buying with a specific slippage, although you may need to
              use slippage during times of market volatility.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default How;