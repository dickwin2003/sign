import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "黄大仙灵签殿堂 - 虔诚求签" },
    { name: "description", content: "黄大仙灵签殿堂，承蒙黄大仙师恩准，传承古法，指引迷津" },
  ];
};

export default function Index() {
  return (
    <Layout>
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
          <section className="bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg shadow-sm p-3 border-2 border-yellow-900/20">
            <h2 className="text-sm font-medium text-yellow-900 mb-2 flex items-center">
              <i className="fas fa-scroll mr-2 text-yellow-800"></i>
              求签步骤
            </h2>
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-yellow-100 border border-yellow-900/20 flex items-center justify-center text-yellow-800 font-medium shrink-0 text-xs">
                  壹
                </div>
                <div className="ml-2">
                  <p className="text-yellow-900/90 text-xs">
                    <span className="font-medium">虔诚参拜：</span>
                    默念姓名、年龄，祈求指点
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-yellow-100 border border-yellow-900/20 flex items-center justify-center text-yellow-800 font-medium shrink-0 text-xs">
                  贰
                </div>
                <div className="ml-2">
                  <p className="text-yellow-900/90 text-xs">
                    <span className="font-medium">专心祈愿：</span>
                    默想所求事项，保持专注
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-yellow-100 border border-yellow-900/20 flex items-center justify-center text-yellow-800 font-medium shrink-0 text-xs">
                  叁
                </div>
                <div className="ml-2">
                  <p className="text-yellow-900/90 text-xs">
                    <span className="font-medium">求取灵签：</span>
                    点击按钮，虔心等待指示
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 求签须知 */}
          <section className="bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg shadow-sm p-3 border-2 border-yellow-900/20">
            <h2 className="text-sm font-medium text-yellow-900 mb-2 flex items-center">
              <i className="fas fa-book-reader mr-2 text-yellow-800"></i>
              求签须知
            </h2>
            <div className="space-y-1.5">
              <p className="flex items-center text-xs text-yellow-900/90">
                <i className="fas fa-circle text-[3px] mr-2 text-yellow-800"></i>
                每日限求一次，切勿重复
              </p>
              <p className="flex items-center text-xs text-yellow-900/90">
                <i className="fas fa-circle text-[3px] mr-2 text-yellow-800"></i>
                需怀虔诚、恭敬之心
              </p>
              <p className="flex items-center text-xs text-yellow-900/90">
                <i className="fas fa-circle text-[3px] mr-2 text-yellow-800"></i>
                所求事项须明确具体
              </p>
              <p className="flex items-center text-xs text-yellow-900/90">
                <i className="fas fa-circle text-[3px] mr-2 text-yellow-800"></i>
                签文仅供参考，重在明理
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
