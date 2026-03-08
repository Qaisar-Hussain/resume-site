"use client";
import React from "react";

export default function About() {
  return (
    <section id="about" className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Info Card */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Personal</h3>
            <div className="space-y-3 text-slate-700">
              <p><span className="font-semibold text-sky-600">Name:</span> Qaisar Hussain</p>
              <p><span className="font-semibold text-sky-600">Age:</span> 28 years</p>
              <p><span className="font-semibold text-sky-600">Nationality:</span> Pakistan</p>
              <p><span className="font-semibold text-sky-600">Location:</span> Islamabad</p>
            </div>
          </div>

          {/* Professional Info Card */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Professional</h3>
            <div className="space-y-3 text-slate-700">
              <p><span className="font-semibold text-sky-600">Role:</span> Full-Stack Developer</p>
              <p><span className="font-semibold text-sky-600">Expertise:</span> Web Development</p>
              <p><span className="font-semibold text-sky-600">Experience:</span> 10+ years</p>
              <p><span className="font-semibold text-sky-600">Education:</span> 14+ years</p>
            </div>
          </div>

          {/* Bio Card */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-xl border border-sky-200 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Bio</h3>
            <p className="text-slate-700 leading-relaxed text-sm">
              I am a passionate Full-Stack Web Developer with 10+ years of experience building innovative web solutions. I specialize in creating responsive, modern applications that solve real-world problems.
            </p>
          </div>
        </div>

        {/* Full Description */}
        <div className="mt-12 bg-slate-50 p-8 rounded-xl border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">My Story</h3>
          <p className="text-slate-700 leading-relaxed">
            Hello, my name is Qaisar and I am a Full-Stack Web Developer. I am passionate about using my coding skills to solve complex problems and create innovative solutions. As a developer, I have experience in a variety of programming languages and technologies, and I am always eager to learn and expand my skillset. I am a team player and thrive in collaborative environments where I can work with other talented developers to achieve a common goal. In my free time, I enjoy exploring new technologies, participating in hackathons, and contributing to open-source projects. I believe that software development is more than just writing code. It&apos;s about understanding user needs, designing elegant solutions, and continuously improving the user experience. I am excited to be a part of this dynamic industry and look forward to making a positive impact through my work.
          </p>
        </div>
      </div>
    </section>
  );
}
