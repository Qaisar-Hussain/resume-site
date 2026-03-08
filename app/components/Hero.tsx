"use client";
import Image from "next/image";
import { IconContext } from "react-icons";
import { BiLogoGmail } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { MdPermContactCalendar } from "react-icons/md";

export default function Hero() {
  const currentYear: number = new Date().getFullYear();
  let currentMonth: number = new Date().getMonth();
  currentMonth += 1;
  const currentDay: number = new Date().getDate();

  return (
    <IconContext.Provider value={{ color: "white", className: "w-6 h-6" }}>
      <section className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Profile Image */}
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full blur-2xl opacity-20"></div>
                <Image
                  className="rounded-full w-80 h-80 md:w-96 md:h-96 object-cover border-4 border-sky-400 shadow-2xl relative z-10 hover:scale-105 transition duration-300"
                  src="/bluecoat.jpg"
                  alt="Qaisar Hussain"
                  width={400}
                  height={400}
                  priority
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="text-white space-y-8 order-1 md:order-2">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-2 text-white">
                  Qaisar Hussain
                </h1>
                <p className="text-2xl md:text-3xl text-sky-400 font-semibold mb-4">
                  Full-Stack Web Developer
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Building beautiful, responsive web applications with modern technologies. 
                  Passionate about solving complex problems and creating excellent user experiences.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-4 hover:text-sky-400 transition duration-300">
                  <MdPermContactCalendar className="w-6 h-6 text-sky-400" />
                  <span className="text-gray-300">
                    {String(currentDay).padStart(2, '0')}-{String(currentMonth).padStart(2, '0')}-{currentYear}
                  </span>
                </div>

                <div className="flex items-center space-x-4 hover:text-sky-400 transition duration-300">
                  <RiWhatsappFill className="w-6 h-6 text-sky-400" />
                  <span className="text-gray-300">+92 316 5038214</span>
                </div>

                <div className="flex items-center space-x-4 hover:text-sky-400 transition duration-300">
                  <BiLogoGmail className="w-6 h-6 text-sky-400" />
                  <span className="text-gray-300">qhussain960@gmail.com</span>
                </div>

                <div className="flex items-center space-x-4 hover:text-sky-400 transition duration-300">
                  <IoHome className="w-6 h-6 text-sky-400" />
                  <span className="text-gray-300">Islamabad, Pakistan</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a href="#contact" className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
}
