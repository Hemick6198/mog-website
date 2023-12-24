import React from "react";

function Footer() {
  const footerStyle = {
    fontFamily: "Inknut Antiqua, serif",
  };

  return (
    <div className="bg-[#E3DFDC] w-full ">
      <div
        className="w-full flex items-center justify-center flex-col"
        style={footerStyle}
      >
        <h2> &copy; 2023 by MOG. All rights reserved!</h2>
        <h2>
          DISCLAIMER: $MOG is a memecoin with no intrinsic value or expectation
          of financial return.
        </h2>
      </div>
    </div>
  );
}

export default Footer;
