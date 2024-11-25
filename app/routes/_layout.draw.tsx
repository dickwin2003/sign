import { json, redirect, type LoaderFunctionArgs, type ActionFunctionArgs, type MetaFunction } from "@remix-run/cloudflare";
import { Form, useLoaderData, useSearchParams } from "@remix-run/react";
import { createMetaTags } from "~/utils/meta";
import { createDivinationServiceSchema } from "~/utils/schema";
import { throwHolyCup, type DivineResult } from "~/utils/divine";

export const meta: MetaFunction = () => createMetaTags(
  "求签问事",
  "黄大仙灵签在线求签，虔诚问事，获取神明指引。提供圣杯确认和详细解签服务，助您明晰前路，趋吉避凶。",
  "求签问事,圣杯确认,解签服务,运势预测,神明指引",
  "/fortune"
);

// 生成随机签号
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const existingSignNumber = url.searchParams.get("signNumber");
  const divineResult = url.searchParams.get("divineResult");
  
  // 如果已经有签号，使用现有的
  if (existingSignNumber) {
    return json({ 
      signNumber: parseInt(existingSignNumber, 10),
      divineResult: divineResult ? JSON.parse(divineResult) : null
    });
  }
  
  // 否则生成新的签号 (1-100)
  const signNumber = Math.floor(Math.random() * 100) + 1;
  return json({ signNumber, divineResult: null });
}

// 处理表单提交
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  
  // 如果是从首页来的求签请求（没有signNumber和intent）
  const signNumber = formData.get("signNumber");
  const intent = formData.get("intent");
  
  if (!signNumber && !intent) {
    // 生成新的签号
    const newSignNumber = Math.floor(Math.random() * 100) + 1;
    return redirect(`/draw?signNumber=${newSignNumber}`);
  }

  // 处理投掷圣杯
  if (intent === "divine") {
    const result = throwHolyCup();
    const divineResult = encodeURIComponent(JSON.stringify(result));
    if (!result.isHoly) {
      // 如果是阴杯，生成新的签号
      const newSignNumber = Math.floor(Math.random() * 100) + 1;
      return redirect(`/draw?signNumber=${newSignNumber}&divineResult=${divineResult}`);
    }
    return redirect(`/draw?signNumber=${signNumber}&divineResult=${divineResult}`);
  }
  
  // 处理查看结果（仅当得到圣杯时才能查看）
  if (intent === "result") {
    const divineResultStr = formData.get("divineResult") as string;
    if (divineResultStr) {
      const divineResult = JSON.parse(divineResultStr);
      if (divineResult.isHoly) {
        return redirect(`/result?signNumber=${signNumber}`);
      }
    }
    // 如果没有投圣杯或得到阴杯，重新求签
    const newSignNumber = Math.floor(Math.random() * 100) + 1;
    const divineResult = encodeURIComponent(JSON.stringify({ isHoly: false, message: "请先投掷圣杯并获得圣杯指引" }));
    return redirect(`/draw?signNumber=${newSignNumber}&divineResult=${divineResult}`);
  }
  
  // 如果没有有效的 intent，返回到首页
  return redirect("/");
}

export default function Draw() {
  const { signNumber, divineResult } = useLoaderData<typeof loader>();
  const divinationSchema = createDivinationServiceSchema();
  const [searchParams] = useSearchParams();
  const hasThrown = searchParams.has("divineResult");
  
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col justify-between bg-amber-50/30 py-3">
      <script type="application/ld+json">
        {JSON.stringify(divinationSchema)}
      </script>
      {/* 签号显示 */}
      <div className="text-center py-6">
        <div className="bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-6 mx-2 inline-block">
          <div className="mb-3">
            <i className="fas fa-scroll text-yellow-800/90 text-3xl"></i>
          </div>
          <h2 className="text-xl font-bold text-yellow-900 mb-2">第 {signNumber} 签</h2>
          {divineResult ? (
            <p className={`text-sm ${divineResult.isHoly ? 'text-green-700' : 'text-red-700'}`}>
              {divineResult.message}
            </p>
          ) : (
            <p className="text-yellow-900/80 text-xs">仙签已定，是否需要投掷圣杯确认？</p>
          )}
        </div>
      </div>

      {/* 按钮区域 */}
      <div className="px-4 space-y-4">
        {(!hasThrown || (divineResult && !divineResult.isHoly)) && (
          <Form method="post">
            <input type="hidden" name="signNumber" value={signNumber} />
            <input type="hidden" name="intent" value="divine" />
            <button
              type="submit"
              className="w-full py-3 px-4 text-yellow-50 text-base font-medium bg-gradient-to-r from-yellow-800 to-yellow-700 rounded-lg shadow-md transition-all duration-300 hover:from-yellow-700 hover:to-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50"
            >
              <i className="fas fa-hands-praying mr-2"></i>
              {divineResult ? '重新投掷圣杯' : '投掷圣杯'}
            </button>
          </Form>
        )}

        {divineResult?.isHoly && (
          <Form method="post">
            <input type="hidden" name="signNumber" value={signNumber} />
            <input type="hidden" name="intent" value="result" />
            <input type="hidden" name="divineResult" value={JSON.stringify(divineResult)} />
            <button
              type="submit"
              className="w-full py-3 px-4 text-yellow-900 text-base font-medium bg-gradient-to-r from-amber-200 to-yellow-200 rounded-lg shadow-md transition-all duration-300 hover:from-amber-300 hover:to-yellow-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50 border border-yellow-900/20"
            >
              <i className="fas fa-book-open mr-2"></i>
              立即解签
            </button>
          </Form>
        )}
      </div>

      {/* 说明文字 */}
      <div className="px-4 py-6">
        <div className="text-center text-yellow-900/70 text-xs">
          <p>圣杯可确认此签是否契合您的问事，</p>
          <p>若得阴杯，建议重新求签。</p>
        </div>
      </div>
    </div>
  );
}
