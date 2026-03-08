"use client";
import { FaLinkedin, FaFacebook, FaTwitter, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { BiLogoUpwork } from "react-icons/bi";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-gradient-to-br from-slate-900 to-slate-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto"></div>
          <p className="text-gray-300 text-lg mt-4">
            Let&apos;s connect and discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="flex items-start space-x-4 group cursor-pointer">
              <div className="p-3 bg-sky-500 rounded-lg group-hover:bg-sky-600 transition duration-300">
                <FaPhone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-semibold">+92 316 5038214</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group cursor-pointer">
              <div className="p-3 bg-sky-500 rounded-lg group-hover:bg-sky-600 transition duration-300">
                <FaEnvelope className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-semibold">qhussain960@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group cursor-pointer">
              <div className="p-3 bg-sky-500 rounded-lg group-hover:bg-sky-600 transition duration-300">
                <FaMapMarkerAlt className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-semibold">Islamabad, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Contact Form or Social Links */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <p className="text-gray-300 mb-6">
              Follow me on social media or reach out directly. I&apos;m always open to discussing new projects and opportunities.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <a
                href="https://www.linkedin.com/in/qaisar-hussain-789317229/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-white/10 hover:bg-sky-500 rounded-lg transition duration-300 group"
              >
                <FaLinkedin className="w-6 h-6 text-white group-hover:scale-110 transition duration-300" />
              </a>
              <a
                href="https://web.facebook.com/qaisar.hussain.1481"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-white/10 hover:bg-sky-500 rounded-lg transition duration-300 group"
              >
                <FaFacebook className="w-6 h-6 text-white group-hover:scale-110 transition duration-300" />
              </a>
              <a
                href="https://twitter.com/QaisarH65015958"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-white/10 hover:bg-sky-500 rounded-lg transition duration-300 group"
              >
                <FaTwitter className="w-6 h-6 text-white group-hover:scale-110 transition duration-300" />
              </a>
              <a
                href="https://github.com/Qaisar-Hussain"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-white/10 hover:bg-sky-500 rounded-lg transition duration-300 group"
              >
                <FaGithub className="w-6 h-6 text-white group-hover:scale-110 transition duration-300" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01bbe921ebd79b5cd2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-white/10 hover:bg-sky-500 rounded-lg transition duration-300 group"
              >
                <BiLogoUpwork className="w-6 h-6 text-white group-hover:scale-110 transition duration-300" />
              </a>
            </div>

            <a
              href="mailto:qhussain960@gmail.com"
              className="block w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-center px-8 py-3 rounded-lg font-semibold transition duration-300 mt-4"
            >
              Send me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
