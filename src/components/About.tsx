import React from "react";
import Image from "next/image";
import mogPc from "@/assets/mog 1.png";

function About() {
  return (
    <div className="flex w-full ">
      <div className="row flex flex-row justify-around">
        <div className="about_logo">
          <div className="about_logo-img">
            <Image src={mogPc} alt="MOG" width={480} height={480} />
          </div>
        </div>
        <div className="nav_about flex flex-col w-1/3">
          <h1 className="text-white mt-1 text-xl font-vt323">About MOG</h1>
          <p className="nav_about-content text-white pt-20 text-lg font-inknut">
            $MOG is powerful, mog is effortless. It incites envy, it is
            boastful, it is proud. It dominates others, it is self-perpetuating,
            it is a swarm, it keeps receipts of wrongs. Mog delights in winning
            and rejoices in glory.
          </p>
          <p className="pt-10 text-white font-inknut">
            DISCLAIMER: $MOG is a memecoin with no intrinsic value or
            expectation of financial return.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
