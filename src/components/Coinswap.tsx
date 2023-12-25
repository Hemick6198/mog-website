import React from "react";

function coinswap() {
  return (
    <div className="flex items-center justify-center">
      <div>
        <iframe
          width="400"
          height="720"
          allow="clipboard-read ; clipboard-write; web-share ; accelerometer; autoplay ; camera; gyroscope ; payment; geolocation *"
          src="https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress=0xaaeE1A9723aaDB7afA2810263653A34bA2C21C7a&swapLockToToken=true&onRampDisabled=false&onRampAsDefault=false&onRampTokenAddress=eth&stakeDisabled=true&network=eth&lightMode=false&primaryColor=%235e38f4&backgroundColor=transparent&roundedCorners=14&padding=20"
        ></iframe>
      </div>
    </div>
  );
}

export default coinswap;
