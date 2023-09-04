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
        value={{ color: "gray", className: " w-20 h-32 mx-16" }}
      >
        <div className="allIcons flex justify-center mt-12">
          <div>
            {" "}
            <Link href="https://www.linkedin.com/in/qaisar-hussain-789317229/">
              <LiaLinkedinIn />
            </Link>
          </div>
          <div>
            {" "}
            <Link href="/https://facebook.com">
              <LiaFacebook />
            </Link>
          </div>
          <div>
            {" "}
            <Link href="https://twitter.com/QaisarH65015958?t=PtYCslb_LucxFlBlYqwNfg&s=09">
              <LiaTwitter />
            </Link>
          </div>
          <div>
            {" "}
            <Link href="https://github.com/Qaisar-Hussain">
              <LiaGithub />
            </Link>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
