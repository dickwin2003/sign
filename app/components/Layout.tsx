import { Link } from "@remix-run/react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* 顶部导航 */}
      <nav className="bg-yellow-800 text-yellow-50 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg font-medium hover:text-yellow-200 transition-colors">
            黄大仙灵签
          </Link>
          <div className="flex space-x-4 text-sm">
            <Link to="/draw" className="hover:text-yellow-200 transition-colors">
              求签
            </Link>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>

      {/* 页脚 */}
      <footer className="bg-yellow-800/5 py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-yellow-900/60 text-sm">
          <p>黄大仙灵签殿堂 {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
