import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { FaBeer, FaFolder, FaLink } from "react-icons/fa";
import {
  LiaLinkedinIn,
  LiaFacebook,
  LiaTwitter,
  LiaGithub,
} from "react-icons/lia";
export default function Icons() {
  return (
    <>
      <IconContext.Provider
        // value={{ color: "gray", className: " w-20 h-32 mx-16" }}
        value={{ color: "gray", className: " w-20 h-32 mx-16"}}
      >
        {/* <div className="allIcons flex flex-wrap justify-center mt-12 gap-4"> */}
        <div className="allIcons flex flex-wrap justify-center mt-12 mx-0  max-md:gap-x-0">
          {/* <div className="border-2 border-black"> */}
            <Link href="https://www.linkedin.com/in/qaisar-hussain-789317229/">
              <LiaLinkedinIn className=" max-[1180px]:w-16  max-[1180px]:h-24 max-md:w-10 max-md:h-16  max-md:mx-4 max-md:my-4"  />
            </Link>
          {/* </div> */}
          {/* <div className="border-2 border-black"> */}
            <Link href="https://web.facebook.com/qaisar.hussain.1481">
              <LiaFacebook className=" max-[1180px]:w-16  max-[1180px]:h-24  max-md:w-10 max-md:h-16 max-md:mx-4 max-md:my-4" />
            </Link>
          {/* </div> */}
          {/* <div className="border-2 border-black"> */}
            <Link href="https://twitter.com/QaisarH65015958?t=PtYCslb_LucxFlBlYqwNfg&s=09">
              <LiaTwitter className=" max-[1180px]:w-16  max-[1180px]:h-24  max-md:w-10 max-md:h-16 max-md:mx-4 max-md:my-4" />
            </Link>
          {/* </div> */}
          {/* <div className="border-2 border-black"> */}
            <Link href="https://github.com/Qaisar-Hussain">
              <LiaGithub className=" max-[1180px]:w-16  max-[1180px]:h-24  max-md:w-10 max-md:h-16 max-md:mx-4 max-md:my-4" />
            </Link>
          {/* </div> */}
        </div>
      </IconContext.Provider>
    </>
  );
}
