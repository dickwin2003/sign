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
        <p className="text-yellow-800/90 text-sm">承蒙黄大仙师恩准，传承古法，指引迷津</p>
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

      {/* 求签步骤 */}
      <div className="px-4 py-3">
        <div className="bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-3">
          <h2 className="text-base font-medium text-yellow-900 mb-3 text-center">求签流程</h2>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="bg-yellow-100 text-yellow-900 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">壹</span>
              <p className="text-sm text-yellow-900/90 flex-1">点击"开始求签"按钮，虔诚祈愿</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="bg-yellow-100 text-yellow-900 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">贰</span>
              <p className="text-sm text-yellow-900/90 flex-1">可选择投掷圣杯，获得神明指示</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="bg-yellow-100 text-yellow-900 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">叁</span>
              <p className="text-sm text-yellow-900/90 flex-1">解签后获得黄大仙师指引</p>
            </div>
          </div>
        </div>
      </div>

      {/* 求签须知 */}
      <div className="px-4 py-3">
        <div className="bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-3">
          <h2 className="text-base font-medium text-yellow-900 mb-3 text-center">求签须知</h2>
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <i className="fas fa-circle text-[6px] text-yellow-800 mt-1.5"></i>
              <p className="text-sm text-yellow-900/90 flex-1">求签前需虔诚祈祷，心无杂念</p>
            </div>
            <div className="flex items-start space-x-3">
              <i className="fas fa-circle text-[6px] text-yellow-800 mt-1.5"></i>
              <p className="text-sm text-yellow-900/90 flex-1">每次求签需间隔一天以上</p>
            </div>
            <div className="flex items-start space-x-3">
              <i className="fas fa-circle text-[6px] text-yellow-800 mt-1.5"></i>
              <p className="text-sm text-yellow-900/90 flex-1">解签内容仅供参考，切勿过分依赖</p>
            </div>
            <div className="flex items-start space-x-3">
              <i className="fas fa-circle text-[6px] text-yellow-800 mt-1.5"></i>
              <p className="text-sm text-yellow-900/90 flex-1">遵医嘱，守法规，有疑问及时咨询专业人士</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
