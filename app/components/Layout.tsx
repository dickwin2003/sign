import { Link } from "@remix-run/react";
import "../styles/tailwind.css";

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
            <Link to="/random_number" className="hover:text-yellow-200 transition-colors">
              指定求签
            </Link>
            <Link to="/draw" className="hover:text-yellow-200 transition-colors">
              抽签
            </Link>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-2xl mx-auto">
        {children}
      </main>

      {/* 页脚 */}
      <footer className="bg-yellow-800/90 text-yellow-50/90 py-3 px-4 mt-6">
        <div className="max-w-7xl mx-auto text-center text-xs">
          <p>黄大仙灵签殿堂 • 虔诚求签 • 明理修身</p>
        </div>
      </footer>
    </div>
  );
}
