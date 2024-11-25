import { json, redirect, type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { getSignByNumber, type SignRecord } from "~/utils/signUtils";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const signNumber = url.searchParams.get("signNumber");
  
  if (!signNumber) {
    return redirect("/");
  }

  const signNo = parseInt(signNumber, 10);
  const sign = getSignByNumber(signNo);
  
  if (!sign) {
    return redirect("/");
  }

  return json({ sign });
}

export default function Result() {
  const { sign } = useLoaderData<{ sign: SignRecord }>();

  return (
    <div className="min-h-[calc(100vh-6rem)] bg-amber-50/30 py-3 px-4">
      {/* 签文标题 */}
      <div className="text-center mb-6">
        <div className="w-full bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-6 py-4">
          <div className="mb-2">
            <i className="fas fa-scroll text-yellow-800/90 text-2xl"></i>
          </div>
          <h1 className="text-xl font-bold text-yellow-900">第{sign.no}簽</h1>
          <h2 className="text-lg font-medium text-yellow-800 mt-1">【{sign.qt}】</h2>
          <p className="text-base text-yellow-700 mt-1">{sign.jx}</p>
        </div>
      </div>

      {/* 签文内容 */}
      <div className="space-y-4">
        {/* 签诗 */}
        <div className="bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4">
          <h2 className="text-base font-medium text-yellow-900 mb-3 flex items-center">
            <i className="fas fa-feather-alt mr-2"></i>
            簽詩
          </h2>
          <div className="bg-white/60 rounded-lg p-4 border border-yellow-900/10">
            <div className="text-yellow-900/90 text-sm text-center">
              {(() => {
                const lines = sign.qs.replace(/[，。]/g, '').split(' ').filter(line => line.trim());
                const firstLine = `${lines[0]} ${lines[1]}`;
                const secondLine = `${lines[2]} ${lines[3]}`;
                return (
                  <>
                    {firstLine}<br />
                    {secondLine}
                  </>
                );
              })()}
            </div>
          </div>
        </div>

        {/* 解曰 */}
        <div className="bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4">
          <h2 className="text-base font-medium text-yellow-900 mb-3 flex items-center">
            <i className="fas fa-book-open mr-2"></i>
            解曰
          </h2>
          <div className="bg-white/60 rounded-lg p-4 border border-yellow-900/10">
            <p className="text-yellow-900/90 text-sm whitespace-pre-line leading-relaxed">
              {sign.jy}
            </p>
          </div>
        </div>

        {/* 仙机 */}
        <div className="bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4">
          <h2 className="text-base font-medium text-yellow-900 mb-3 flex items-center">
            <i className="fas fa-star mr-2"></i>
            仙機
          </h2>
          <div className="bg-white/60 rounded-lg p-4 border border-yellow-900/10">
            <div className="text-yellow-900/90 text-sm leading-relaxed">
              {(() => {
                // 使用正则表达式匹配"两个汉字+冒号"的模式
                const regex = /([\u4e00-\u9fa5]{2}[：:].*?)(?=[\u4e00-\u9fa5]{2}[：:]|$)/g;
                const matches = [...sign.xj.matchAll(regex)];
                
                // 找到第一个匹配的位置
                const firstMatch = sign.xj.match(/[\u4e00-\u9fa5]{2}[：:]/);
                const firstPart = firstMatch 
                  ? sign.xj.substring(0, firstMatch.index).trim()
                  : '';
                
                return (
                  <>
                    {firstPart && <div className="mb-4">{firstPart}</div>}
                    {matches.map((match, index) => (
                      <div key={index} className="mb-2 last:mb-0">
                        {match[0].trim()}
                      </div>
                    ))}
                  </>
                );
              })()}
            </div>
          </div>
        </div>

        {/* 典故 */}
        <div className="bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4">
          <h2 className="text-base font-medium text-yellow-900 mb-3 flex items-center">
            <i className="fas fa-landmark mr-2"></i>
            典故
          </h2>
          <div className="bg-white/60 rounded-lg p-4 border border-yellow-900/10">
            <p className="text-yellow-900/90 text-sm whitespace-pre-line leading-relaxed">
              {sign.dg}
            </p>
          </div>
        </div>
      </div>

      {/* 返回按钮 */}
      <div className="mt-6 mb-4">
        <Link
          to="/"
          className="block w-full py-3 px-4 text-yellow-900 text-base font-medium bg-gradient-to-r from-amber-200 to-yellow-200 rounded-lg shadow-md transition-all duration-300 hover:from-amber-300 hover:to-yellow-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50 border border-yellow-900/20 text-center"
        >
          <i className="fas fa-home mr-2"></i>
          返回首頁
        </Link>
      </div>
    </div>
  );
}
