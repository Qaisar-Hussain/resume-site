"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-gray-300 py-8 px-4 border-t border-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Qaisar Hussain</h3>
            <p className="text-gray-400 text-sm">
              Full-Stack Web Developer crafting beautiful and functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-sky-400 transition duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-400 transition duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-400 transition duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe for updates on new projects and insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
              />
              <button className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded text-sm font-semibold transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              &copy; {currentYear} Qaisar Hussain. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-sky-400 transition duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-sky-400 transition duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-sky-400 transition duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
