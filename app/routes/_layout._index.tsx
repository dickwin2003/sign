import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "黄大仙灵签殿堂 - 虔诚求签" },
    { name: "description", content: "黄大仙灵签殿堂，承蒙黄大仙师恩准，传承古法，指引迷津" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col justify-between bg-amber-50/30 py-3">
      {/* 殿堂标题 */}
      <div className="bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-3 mx-2 text-center">
        <div className="mb-2">
          <i className="fas fa-dharmachakra text-yellow-800/90 text-3xl"></i>
        </div>
        <h1 className="text-xl font-bold mb-1 text-yellow-900">黄大仙灵签殿堂</h1>
        <p className="text-yellow-900/80 text-xs tracking-wide">承蒙黄大仙师恩准 • 传承古法 • 指引迷津</p>
      </div>

      {/* 求签表单 */}
      <div className="flex flex-col items-center justify-center py-3 px-2">
        <div className="w-full bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4 shadow-[0_0_15px_rgba(217,119,6,0.1)]">
          <Form method="post" action="/draw" className="space-y-4">
            <div className="text-center space-y-3">
              <div className="inline-block p-3 bg-yellow-100/80 rounded-full border-2 border-yellow-900/20">
                <i className="fas fa-pray text-xl text-yellow-800"></i>
              </div>
              <h3 className="text-base font-medium text-yellow-900">虔诚求签</h3>
              <p className="text-yellow-800/90 text-xs">诚心祈愿，静候仙示</p>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 text-yellow-50 text-base font-medium bg-gradient-to-r from-yellow-800 to-yellow-700 rounded-lg shadow-md transition-all duration-300 hover:from-yellow-700 hover:to-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50"
            >
              开始求签
            </button>
          </Form>
        </div>
      </div>

      {/* 求签步骤和须知 */}
      <div className="grid grid-cols-1 gap-3 px-2">
        {/* 求签步骤 */}
        <div className="bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 p-4">
          <h3 className="text-base font-medium text-yellow-900 mb-3">求签步骤</h3>
          <ol className="list-decimal list-inside text-sm text-yellow-800/90 space-y-2">
            <li>点击"开始求签"按钮</li>
            <li>诚心默念您的姓名、出生年月和所求之事</li>
            <li>虔诚祈祷，等待灵签显示</li>
            <li>仔细阅读签文解释，参悟其中玄机</li>
          </ol>
        </div>

        {/* 求签须知 */}
        <div className="bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 p-4">
          <h3 className="text-base font-medium text-yellow-900 mb-3">求签须知</h3>
          <ul className="list-disc list-inside text-sm text-yellow-800/90 space-y-2">
            <li>保持虔诚恭敬的心态</li>
            <li>每日限求一签</li>
            <li>切勿重复求问同一事项</li>
            <li>签文仅供参考，关键时刻还需谨慎判断</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
