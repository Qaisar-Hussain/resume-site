"use client";
import Image from "next/image";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "HTML5", icon: "/html3.avif" },
      { name: "CSS3", icon: "/css.webp" },
      { name: "JavaScript", icon: "/js.webp" },
      { name: "TypeScript", icon: "/ts.png" },
      { name: "Solidity", icon: "/sol.png" },
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Next.js", icon: "/next3.png" },
      { name: "React", icon: "/react2.png" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-gradient-to-br from-slate-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto"></div>
          <p className="text-gray-600 text-lg mt-4">
            Proficient in modern web technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillsData.map((skillGroup, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                {skillGroup.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
                {skillGroup.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-slate-200 hover:border-sky-400 hover:shadow-lg transition duration-300 cursor-pointer group"
                  >
                    <div className="relative w-full h-20 mb-3 flex items-center justify-center">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={80}
                        height={80}
                        className="object-contain group-hover:scale-110 transition duration-300"
                      />
                    </div>
                    <p className="text-sm font-semibold text-slate-700 text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-sky-50 to-blue-50 p-8 rounded-xl border border-sky-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <span className="text-sky-500 font-bold text-lg">✓</span>
              <div>
                <p className="font-semibold text-slate-900">Full-Stack Development</p>
                <p className="text-sm text-slate-600">Frontend & Backend</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-sky-500 font-bold text-lg">✓</span>
              <div>
                <p className="font-semibold text-slate-900">Responsive Design</p>
                <p className="text-sm text-slate-600">Mobile-First Approach</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-sky-500 font-bold text-lg">✓</span>
              <div>
                <p className="font-semibold text-slate-900">Web Development</p>
                <p className="text-sm text-slate-600">Modern Best Practices</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-sky-500 font-bold text-lg">✓</span>
              <div>
                <p className="font-semibold text-slate-900">Problem Solving</p>
                <p className="text-sm text-slate-600">Creative Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
