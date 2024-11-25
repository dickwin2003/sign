import Layout from "~/components/Layout";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { getAllSigns } from "~/utils/signUtils";
import hdxData from "~/data/hdx.json";
import type { SignRecord } from "~/utils/signUtils";

export async function loader() {
  const signs = getAllSigns();
  return json({ signs });
}

export default function Blog() {
  const { signs } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <div className="min-h-[calc(100vh-6rem)] bg-amber-50/30 py-8 px-4">
        <div className="max-w-screen-md mx-auto">
          <div className="bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-6">
            <h1 className="text-2xl font-bold text-yellow-900 mb-6 text-center font-serif flex items-center justify-center gap-2">
              <span className="text-2xl">📜</span>
              靈簽典籍
            </h1>
            <div className="space-y-4">
              {signs.map((sign) => (
                <div 
                  key={sign.no}
                  className="bg-white/60 rounded-lg p-4 border border-yellow-900/10 hover:bg-white/80 transition-colors duration-300"
                >
                  <h2 className="text-lg font-medium text-yellow-900 mb-2">
                    第{sign.no}簽：{sign.qt}
                  </h2>
                  <p className="text-yellow-900/90 text-sm">{sign.jx}</p>
                  <p className="text-gray-800 text-sm whitespace-pre-line">{sign.qs}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
