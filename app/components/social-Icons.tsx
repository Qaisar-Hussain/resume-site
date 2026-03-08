import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { FaBeer, FaFolder, FaLink } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoUpwork } from "react-icons/bi";
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
        value={{ color: "gray", className: " w-12 h-12 " }}
      >
        {/* <div className="allIcons flex flex-wrap justify-center mt-12 gap-4"> */}
        <div className="allIcons mt-4 flex justify-center mx-0 border-2 border-green-400 flex-row max-md:gap-x-0">
        
          <ul className="flex flex-row justify-center gap-x-4">
            <li className="border-2 border-yellow-200 w-auto h-aut0 flex justify-center items-center">
              <a
                href="https://www.linkedin.com/in/qaisar-hussain-789317229/"
                className="block border-2 border-gray-400 p-2 rounded-full"
              >
                <LiaLinkedinIn className="" />
              </a>
            </li>

            <li className="border-2 border-yellow-200 w-auto h-aut0 flex justify-center items-center">
              <a
               href="https://web.facebook.com/qaisar.hussain.1481"
                className="block border-2 border-gray-400 p-2 rounded-full"
              >
                <FaFacebook className="" />
              </a>
            </li>
            <li className="border-2 border-yellow-200 w-auto h-aut0 flex justify-center items-center">
              <a
                 href="https://twitter.com/QaisarH65015958?t=PtYCslb_LucxFlBlYqwNfg&s=09"
                className="block border-2 border-gray-400 p-2 rounded-full"
              >
                <LiaTwitter className="" />
              </a>
            </li>
            <li className="border-2 border-yellow-200 w-auto h-aut0 flex justify-center items-center">
              <a
               href="https://github.com/Qaisar-Hussain"
                className="block border-2 border-gray-400 p-2 rounded-full"
              >
                <FaGithub className="" />
              </a>
            </li>
            <li className="border-2 border-yellow-200 w-auto h-aut0 flex justify-center items-center">
              <a
               href="https://www.upwork.com/freelancers/~01bbe921ebd79b5cd2"
                className="block border-2 border-gray-400 p-2 rounded-full"
              >
                <BiLogoUpwork className="" />
              </a>
            </li>
          </ul>
          {/* <a href="https://www.linkedin.com/in/qaisar-hussain-789317229/" className="border-2 border-red-600 w-12 block"> */}

          {/* </a> */}
          {/* </div> */}
          {/* </div> */}
          {/* <div className="border-2 border-black"> */}
          {/* <Link href="https://web.facebook.com/qaisar.hussain.1481" className="w-12 inline-block">
              <LiaFacebook className=" max-[1180px]:w-16 border-2 max-[1180px]:h-24  max-md:w-10 max-md:h-16 max-md:mx-4 max-md:my-4" />
            </Link> */}
          {/* </div> */}
          {/* <div className="border-2 border-black"> */}
          {/* <Link className="w-12" href="https://twitter.com/QaisarH65015958?t=PtYCslb_LucxFlBlYqwNfg&s=09">
              <LiaTwitter className=" max-[1180px]:w-16  max-[1180px]:h-24  max-md:w-10 max-md:h-16 max-md:mx-4 max-md:my-4" /> */}
          {/* </Link> */}
          {/* </div> */}
          {/* <div className="border-2 border-black"> */}
          {/* <Link className="w-12" href="https://github.com/Qaisar-Hussain">
              <LiaGithub className=" max-[1180px]:w-16  max-[1180px]:h-24  max-md:w-10 max-md:h-16 max-md:mx-4 max-md:my-4" />
            </Link> */}
          {/* </div> */}
        </div>
      </IconContext.Provider>
    </>
  );
}
