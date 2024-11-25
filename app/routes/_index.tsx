import type { MetaFunction } from "@remix-run/cloudflare";
import { createMetaTags } from "~/utils/meta";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => createMetaTags(
  "在线求签问事",
  "黄大仙灵签殿堂提供在线求签服务，传承黄大仙师古法，为您指引迷津。通过专业的签文解释和运势分析，帮助您趋吉避凶。",
  "在线求签,黄大仙求签,运势预测,签文解释,运程分析",
  "/"
);

export default function Index() {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-amber-50/30">
        <div className="text-center px-4 py-8 w-full max-w-screen-md mx-auto">
          {/* 主标题 */}
          <h1 className="text-4xl font-bold text-yellow-900 mb-4 font-serif">
            黃大仙靈簽
          </h1>
          <p className="text-yellow-900/80 mb-8">
            承蒙黃大仙師恩准，傳承古法，指引迷津
          </p>

          {/* 求签按钮 */}
          <form action="/draw" method="post">
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-800 to-yellow-700 text-yellow-50 px-8 py-4 rounded-lg shadow-lg hover:from-yellow-700 hover:to-yellow-600 transition-all duration-300 font-medium text-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50"
            >
              <i className="fas fa-pray mr-2"></i>
              虔誠求簽
            </button>
          </form>

          {/* 求签步骤说明 */}
          <div className="mt-12 mb-8 max-w-xl mx-auto bg-white/60 rounded-lg p-6 border border-yellow-900/10">
            <h2 className="text-xl font-bold text-yellow-900 mb-4 flex items-center gap-2">
              <i className="fas fa-list-ol text-yellow-800"></i>
              求籤步驟
            </h2>
            <p className="text-yellow-900/90 mb-4">
              求籤前先合手，默念「大仙大仙，指點迷津」並說出求籤內容：
            </p>
            <ul className="list-none space-y-3 text-yellow-900/80">
              <li className="flex items-start gap-3">
                <span className="bg-yellow-100 rounded-full w-6 h-6 flex items-center justify-center text-sm text-yellow-800 flex-shrink-0 mt-0.5">1</span>
                <span>中文全名</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-yellow-100 rounded-full w-6 h-6 flex items-center justify-center text-sm text-yellow-800 flex-shrink-0 mt-0.5">2</span>
                <span>信男（女）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-yellow-100 rounded-full w-6 h-6 flex items-center justify-center text-sm text-yellow-800 flex-shrink-0 mt-0.5">3</span>
                <span>虛齡歲數</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-yellow-100 rounded-full w-6 h-6 flex items-center justify-center text-sm text-yellow-800 flex-shrink-0 mt-0.5">4</span>
                <span>稟報求問之事</span>
              </li>
            </ul>
          </div>

          {/* 功能介绍 */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            <div className="bg-white/60 rounded-lg p-6 border border-yellow-900/10">
              <i className="fas fa-scroll text-3xl text-yellow-800 mb-4"></i>
              <h2 className="text-lg font-bold text-yellow-900 mb-2">靈簽典籍</h2>
              <p className="text-yellow-900/80 text-sm">
                百年傳承，古法今用
              </p>
            </div>
            <div className="bg-white/60 rounded-lg p-6 border border-yellow-900/10">
              <i className="fas fa-hand-holding-heart text-3xl text-yellow-800 mb-4"></i>
              <h2 className="text-lg font-bold text-yellow-900 mb-2">神明指引</h2>
              <p className="text-yellow-900/80 text-sm">
                誠心求問，明燈指路
              </p>
            </div>
            <div className="bg-white/60 rounded-lg p-6 border border-yellow-900/10">
              <i className="fas fa-book-open text-3xl text-yellow-800 mb-4"></i>
              <h2 className="text-lg font-bold text-yellow-900 mb-2">詳解解籤</h2>
              <p className="text-yellow-900/80 text-sm">
                專業解析，趨吉避凶
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
