// src/components/layout/Footer.jsx

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-xl font-bold text-blue-600">
              MySite
            </a>
            <p className="mt-2 text-gray-600">
              A modern SSR application built with Vite and React
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500">
          <p>© {year} MySite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
