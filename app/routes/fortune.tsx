import { useEffect, useState } from "react";
import { getRandomSign, type SignRecord } from "~/utils/signUtils";
import Layout from "~/components/Layout";

export default function Fortune() {
  const [sign, setSign] = useState<SignRecord | null>(null);

  useEffect(() => {
    setSign(getRandomSign());
  }, []);

  if (!sign) {
    return (
      <Layout>
        <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-amber-50/30">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-800"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-[calc(100vh-6rem)] bg-amber-50/30 py-8 px-4">
        <div className="max-w-screen-md mx-auto">
          <div className="bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-6">
            <h1 className="text-2xl font-bold text-yellow-900 mb-6 text-center font-serif flex items-center justify-center gap-2">
              <span className="text-2xl">🐢</span>
              求籤問事
            </h1>
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-red-700 mb-2">{sign.qt}</h2>
              <p className="text-lg font-medium text-red-600">{sign.jx}</p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-red-700 mb-2">籤詩</h3>
                <p className="text-gray-800 whitespace-pre-line">{sign.qs}</p>
              </div>
              <div>
                <h3 className="font-bold text-red-700 mb-2">解曰</h3>
                <p className="text-gray-800 whitespace-pre-line">{sign.jy}</p>
              </div>
              <div>
                <h3 className="font-bold text-red-700 mb-2">小結</h3>
                <p className="text-gray-800 whitespace-pre-line">{sign.xj}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
