import { Link, useLocation } from "@remix-run/react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50/30 to-yellow-100/30 relative">
      {/* Traditional Pattern Background */}
      <div className="absolute inset-0 bg-[url('/images/chinese-pattern.svg')] opacity-5 fixed"></div>
      
      {/* Sacred Header */}
      <header className="bg-gradient-to-b from-red-900 to-red-800 shadow-sm border-b border-red-700 relative">
        <div className="absolute inset-0 bg-[url('/images/chinese-pattern.svg')] opacity-10"></div>
        <nav className="max-w-screen-md mx-auto px-3 py-2 relative">
          <div className="flex justify-between items-center">
            {!isHomePage && (
              <Link 
                to="/" 
                className="text-lg font-bold text-yellow-50 hover:text-yellow-100 transition-colors duration-300 flex items-center"
              >
                <i className="fas fa-peace mr-2 text-yellow-200/90"></i>
                <span className="font-serif">黃大仙靈簽</span>
              </Link>
            )}
            {isHomePage && <div className="w-6"></div>}
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-yellow-50 hover:text-yellow-100 transition-colors duration-300 md:hidden"
              aria-label="開啟選單"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <Link 
                to="/fortune" 
                className="text-yellow-50 hover:text-yellow-100 transition-colors duration-300 flex items-center text-sm"
              >
                <i className="fas fa-pray w-4 text-yellow-200/90"></i>
                <span className="ml-1">求籤問事</span>
              </Link>
              <Link 
                to="/blog" 
                className="text-yellow-50 hover:text-yellow-100 transition-colors duration-300 flex items-center text-sm"
              >
                <i className="fas fa-scroll w-4 text-yellow-200/90"></i>
                <span className="ml-1">靈簽典籍</span>
              </Link>
              <Link 
                to="/about" 
                className="text-yellow-50 hover:text-yellow-100 transition-colors duration-300 flex items-center text-sm"
              >
                <i className="fas fa-info-circle w-4 text-yellow-200/90"></i>
                <span className="ml-1">關於本殿</span>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div 
            className={`${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} 
            md:hidden overflow-hidden transition-all duration-300 ease-in-out mt-2`}
          >
            <div className="border-t border-red-700/50 pt-2 space-y-2">
              <Link 
                to="/fortune" 
                className="flex items-center py-1.5 text-yellow-50 hover:text-yellow-100 transition-colors duration-300 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-pray w-5 text-yellow-200/90"></i>
                <span className="ml-1">求籤問事</span>
              </Link>
              <Link 
                to="/blog" 
                className="flex items-center py-1.5 text-yellow-50 hover:text-yellow-100 transition-colors duration-300 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-scroll w-5 text-yellow-200/90"></i>
                <span className="ml-1">靈簽典籍</span>
              </Link>
              <Link 
                to="/about" 
                className="flex items-center py-1.5 text-yellow-50 hover:text-yellow-100 transition-colors duration-300 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-info-circle w-5 text-yellow-200/90"></i>
                <span className="ml-1">關於本殿</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Sacred Content */}
      <main className="flex-grow relative">
        {children}
      </main>

      {/* Sacred Footer */}
      <footer className="bg-gradient-to-b from-red-800 to-red-900 text-yellow-50 border-t border-red-700 relative mt-auto">
        <div className="absolute inset-0 bg-[url('/images/chinese-pattern.svg')] opacity-10"></div>
        <div className="max-w-screen-md mx-auto px-3 py-4 relative">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-3">
              <a 
                href="https://x.com/dickwin2003" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-200/80 hover:text-yellow-100 transition-colors duration-300"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a 
                href="https://www.youtube.com/@川香回锅肉" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-200/80 hover:text-yellow-100 transition-colors duration-300"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube text-lg"></i>
              </a>
              <a 
                href="https://www.facebook.com/dick.win.7" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-200/80 hover:text-yellow-100 transition-colors duration-300"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-lg"></i>
              </a>
            </div>
            <div className="text-yellow-200/80 space-y-1">
              <p className="text-sm font-medium font-serif">黃大仙靈簽殿堂</p>
              <p className="text-xs tracking-wider">承蒙黃大仙師恩准 • 傳承古法 • 指引迷津</p>
              <p className="text-xs opacity-80"> 2024 版權所有 • 虔誠求籤 • 謹慎參考</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
