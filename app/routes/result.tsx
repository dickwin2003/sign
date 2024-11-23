import { json, redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import hdxData from "~/data/hdx.json";

// 获取签文数据
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const signNumber = url.searchParams.get("signNumber");
  
  if (!signNumber) {
    return redirect("/");
  }

  const sign = hdxData.find(item => item.no === parseInt(signNumber));
  if (!sign) {
    throw new Error(`找不到第 ${signNumber} 签`);
  }

  return json({ sign });
}

export default function Result() {
  const { sign } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <div className="min-h-[calc(100vh-6rem)] bg-amber-50/30 py-3">
        {/* 签号显示 */}
        <div className="text-center py-4">
          <div className="bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-3 mx-2 inline-block">
            <h2 className="text-xl font-bold text-yellow-900">第 {sign.no} 签</h2>
            <p className="text-yellow-900/80 text-sm mt-1">{sign.qt}</p>
          </div>
        </div>

        {/* 签文内容 */}
        <div className="px-4 space-y-4 pb-6">
          {/* 吉凶 */}
          <div className="bg-white/60 rounded-lg p-4 border border-yellow-900/10">
            <h3 className="text-lg font-bold text-yellow-900 mb-2">
              <i className="fas fa-star mr-2 text-yellow-700"></i>
              签文吉凶
            </h3>
            <p className="text-yellow-900/90">{sign.jx}</p>
          </div>

          {/* 诗词 */}
          <div className="bg-white/60 rounded-lg p-4 border border-yellow-900/10">
            <h3 className="text-lg font-bold text-yellow-900 mb-2">
              <i className="fas fa-book mr-2 text-yellow-700"></i>
              签诗
            </h3>
            <p className="text-yellow-900/90 whitespace-pre-line leading-relaxed">{sign.qs}</p>
          </div>

          {/* 解签 */}
          <div className="bg-white/60 rounded-lg p-4 border border-yellow-900/10">
            <h3 className="text-lg font-bold text-yellow-900 mb-2">
              <i className="fas fa-scroll mr-2 text-yellow-700"></i>
              解签
            </h3>
            <p className="text-yellow-900/90 whitespace-pre-line leading-relaxed">{sign.jy}</p>
          </div>

          {/* 详解 */}
          <div className="bg-white/60 rounded-lg p-4 border border-yellow-900/10">
            <h3 className="text-lg font-bold text-yellow-900 mb-2">
              <i className="fas fa-book-open mr-2 text-yellow-700"></i>
              详解
            </h3>
            <p className="text-yellow-900/90 whitespace-pre-line leading-relaxed">{sign.xj}</p>
          </div>

          {/* 典故 */}
          {sign.dg && (
            <div className="bg-white/60 rounded-lg p-4 border border-yellow-900/10">
              <h3 className="text-lg font-bold text-yellow-900 mb-2">
                <i className="fas fa-landmark mr-2 text-yellow-700"></i>
                典故
              </h3>
              <p className="text-yellow-900/90 whitespace-pre-line leading-relaxed">{sign.dg}</p>
            </div>
          )}
        </div>

        {/* 返回按钮 */}
        <div className="px-4 py-4">
          <a
            href="/"
            className="block w-full py-3 px-4 text-center text-yellow-50 text-base font-medium bg-gradient-to-r from-yellow-800 to-yellow-700 rounded-lg shadow-md transition-all duration-300 hover:from-yellow-700 hover:to-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50"
          >
            <i className="fas fa-home mr-2"></i>
            返回首页
          </a>
        </div>
      </div>
    </Layout>
  );
}
