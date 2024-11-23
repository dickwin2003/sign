import { json, redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

// 解签内容数据（示例）
const SIGN_MEANINGS = {
  "1": {
    title: "第一签 上上签",
    poem: "一朝天子坐金銮，四海升平乐自然。\n太平景象人难见，风调雨顺国丰年。",
    meaning: "此签为上上签，预示着诸事顺遂，前程光明。如同天子登基，国泰民安，风调雨顺。",
    advice: "宜进取，可谋事，诸事皆宜。",
    explanation: {
      general: "整体运势极好，可以大胆向前。",
      fortune: "财运亨通，正财偏财皆有进账。",
      health: "身体康健，精神愉悦。",
      love: "姻缘美满，有情人终成眷属。",
      career: "事业蒸蒸日上，有升迁之象。"
    }
  }
  // 后续可添加更多签文内容
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const signNumber = url.searchParams.get("signNumber");
  
  if (!signNumber) {
    return redirect("/");
  }

  // 这里应该从数据库获取签文内容
  // 目前使用示例数据
  const signMeaning = SIGN_MEANINGS["1"] || {
    title: `第${signNumber}签`,
    poem: "暂无签文",
    meaning: "暂无解释",
    advice: "暂无建议",
    explanation: {
      general: "暂无详解",
      fortune: "暂无详解",
      health: "暂无详解",
      love: "暂无详解",
      career: "暂无详解"
    }
  };

  return json({ signNumber: parseInt(signNumber, 10), signMeaning });
}

export default function Result() {
  const { signNumber, signMeaning } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-[calc(100vh-6rem)] bg-amber-50/30 py-3 px-4">
      {/* 签文标题 */}
      <div className="text-center mb-6">
        <div className="inline-block bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-6 py-4">
          <div className="mb-2">
            <i className="fas fa-scroll text-yellow-800/90 text-2xl"></i>
          </div>
          <h1 className="text-xl font-bold text-yellow-900">{signMeaning.title}</h1>
        </div>
      </div>

      {/* 签文内容 */}
      <div className="space-y-4">
        {/* 诗词 */}
        <div className="bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4">
          <h2 className="text-base font-medium text-yellow-900 mb-3 flex items-center">
            <i className="fas fa-feather-alt mr-2"></i>
            签诗
          </h2>
          <div className="bg-white/60 rounded-lg p-4 border border-yellow-900/10">
            <p className="text-yellow-900/90 text-sm whitespace-pre-line leading-relaxed">
              {signMeaning.poem}
            </p>
          </div>
        </div>

        {/* 解签 */}
        <div className="bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4">
          <h2 className="text-base font-medium text-yellow-900 mb-3 flex items-center">
            <i className="fas fa-book-open mr-2"></i>
            解签
          </h2>
          <div className="space-y-3">
            <div className="bg-white/60 rounded-lg p-4 border border-yellow-900/10">
              <p className="text-yellow-900/90 text-sm leading-relaxed">
                {signMeaning.meaning}
              </p>
            </div>
            <div className="bg-white/60 rounded-lg p-4 border border-yellow-900/10">
              <p className="text-yellow-900/90 text-sm leading-relaxed">
                <span className="font-medium">建议：</span>
                {signMeaning.advice}
              </p>
            </div>
          </div>
        </div>

        {/* 详解 */}
        <div className="bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4">
          <h2 className="text-base font-medium text-yellow-900 mb-3 flex items-center">
            <i className="fas fa-list-ul mr-2"></i>
            详解
          </h2>
          <div className="space-y-2">
            <div className="bg-white/60 rounded-lg p-3 border border-yellow-900/10">
              <div className="flex items-start space-x-3">
                <i className="fas fa-star text-yellow-800/80 mt-0.5"></i>
                <p className="text-sm text-yellow-900/90 flex-1">
                  <span className="font-medium">总论：</span>
                  {signMeaning.explanation.general}
                </p>
              </div>
            </div>
            <div className="bg-white/60 rounded-lg p-3 border border-yellow-900/10">
              <div className="flex items-start space-x-3">
                <i className="fas fa-coins text-yellow-800/80 mt-0.5"></i>
                <p className="text-sm text-yellow-900/90 flex-1">
                  <span className="font-medium">财运：</span>
                  {signMeaning.explanation.fortune}
                </p>
              </div>
            </div>
            <div className="bg-white/60 rounded-lg p-3 border border-yellow-900/10">
              <div className="flex items-start space-x-3">
                <i className="fas fa-heart text-yellow-800/80 mt-0.5"></i>
                <p className="text-sm text-yellow-900/90 flex-1">
                  <span className="font-medium">姻缘：</span>
                  {signMeaning.explanation.love}
                </p>
              </div>
            </div>
            <div className="bg-white/60 rounded-lg p-3 border border-yellow-900/10">
              <div className="flex items-start space-x-3">
                <i className="fas fa-briefcase text-yellow-800/80 mt-0.5"></i>
                <p className="text-sm text-yellow-900/90 flex-1">
                  <span className="font-medium">事业：</span>
                  {signMeaning.explanation.career}
                </p>
              </div>
            </div>
            <div className="bg-white/60 rounded-lg p-3 border border-yellow-900/10">
              <div className="flex items-start space-x-3">
                <i className="fas fa-heart-pulse text-yellow-800/80 mt-0.5"></i>
                <p className="text-sm text-yellow-900/90 flex-1">
                  <span className="font-medium">健康：</span>
                  {signMeaning.explanation.health}
                </p>
              </div>
            </div>
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
          返回首页
        </Link>
      </div>
    </div>
  );
}
