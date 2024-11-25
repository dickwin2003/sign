import Layout from "~/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-6rem)] bg-amber-50/30 py-8 px-4">
        <div className="max-w-screen-md mx-auto">
          <div className="bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-6">
            <h1 className="text-2xl font-bold text-yellow-900 mb-6 text-center font-serif flex items-center justify-center gap-2">
              <span className="text-2xl">⛩️</span>
              關於本殿
            </h1>
            <div className="prose prose-yellow max-w-none">
              <h2 className="text-xl font-bold text-yellow-900 mb-4">黃大仙靈簽殿堂</h2>
              <p className="mb-4 text-yellow-900/90">
                黃大仙靈簽殿堂是一個傳承古法、指引迷津的神聖空間。在這裡，我們秉承黃大仙師的慈悲精神，
                為眾生提供求籤問事的服務，希望能夠為大家帶來指引與啟發。
              </p>
              
              <h3 className="text-lg font-bold text-yellow-900 mb-3">關於求籤</h3>
              <p className="mb-4 text-yellow-900/90">
                求籤是中國傳統文化中重要的問事方式之一。在求籤時，我們應當以虔誠的心態，
                清淨的思緒來請示神明。籤詩所示，皆為神明的指引，我們應當細心體會其中的啟示。
              </p>

              <h3 className="text-lg font-bold text-yellow-900 mb-3">注意事項</h3>
              <ul className="list-disc pl-5 mb-4 text-yellow-900/90">
                <li>求籤前應當心存敬意，保持謙遜</li>
                <li>每次求籤應專注於單一問題</li>
                <li>籤詩解讀需要結合實際情況</li>
                <li>遇重大事項仍應審慎決策</li>
              </ul>

              <h3 className="text-lg font-bold text-yellow-900 mb-3">聯絡方式</h3>
              <p className="text-yellow-900/90">
                如有任何問題或建議，歡迎通過社交媒體與我們聯繫。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
