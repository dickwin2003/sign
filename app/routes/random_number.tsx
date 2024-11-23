import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import Layout from "~/components/Layout";
import hdxData from "../data/hdx.json";

export const meta: MetaFunction = () => {
  return [
    { title: "黄大仙灵签 - 指定求签" },
    { name: "description", content: "黄大仙灵签殿堂，指定签号求签" },
  ];
};

export default function RandomNumber() {
  const [searchNo, setSearchNo] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleSearch = () => {
    const no = parseInt(searchNo);
    const found = hdxData.records.find(record => record.no === no);
    setResult(found || null);
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-12rem)] py-4">
        <div className="bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4 mx-2 shadow-[0_0_15px_rgba(217,119,6,0.1)]">
          <div className="text-center space-y-3 mb-6">
            <div className="inline-block p-3 bg-yellow-100/80 rounded-full border-2 border-yellow-900/20">
              <i className="fas fa-book-open text-xl text-yellow-800"></i>
            </div>
            <h2 className="text-base font-medium text-yellow-900">指定求签</h2>
            <p className="text-yellow-800/90 text-xs">输入签号（1-100）进行求签</p>
          </div>

          <div className="flex gap-2 mb-6">
            <input
              type="number"
              min="1"
              max="100"
              value={searchNo}
              onChange={(e) => setSearchNo(e.target.value)}
              placeholder="请输入签号"
              className="flex-1 px-3 py-2 text-base bg-yellow-50 border-2 border-yellow-900/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-yellow-700"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-2 text-yellow-50 bg-gradient-to-r from-yellow-800 to-yellow-700 rounded-lg shadow-md transition-all duration-300 hover:from-yellow-700 hover:to-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50"
            >
              查询
            </button>
          </div>

          {result && (
            <div className="space-y-6">
              <div className="border-b-2 border-yellow-900/20 pb-4">
                <h3 className="text-lg font-medium text-yellow-900">第{result.no}签：{result.qt}</h3>
                <p className={`text-base font-bold mt-2 ${
                  result.jx.includes('大吉') ? 'text-red-600' :
                  result.jx.includes('吉') ? 'text-green-600' :
                  result.jx.includes('平') ? 'text-blue-600' :
                  'text-yellow-600'
                }`}>
                  【{result.jx}】
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-base font-medium text-yellow-900">签诗</h4>
                <p className="text-yellow-800/90 leading-relaxed whitespace-pre-line text-sm">{result.qs}</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-base font-medium text-yellow-900">解曰</h4>
                <p className="text-yellow-800/90 leading-relaxed whitespace-pre-line text-sm">{result.jy}</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-base font-medium text-yellow-900">仙机</h4>
                <p className="text-yellow-800/90 leading-relaxed whitespace-pre-line text-sm">{result.xj}</p>
              </div>
              {result.dg && (
                <div className="space-y-2">
                  <h4 className="text-base font-medium text-yellow-900">典故</h4>
                  <p className="text-yellow-800/90 leading-relaxed whitespace-pre-line text-sm">{result.dg}</p>
                </div>
              )}
            </div>
          )}

          {searchNo && !result && (
            <div className="text-center text-red-500 text-sm">
              未找到对应的签诗信息
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
