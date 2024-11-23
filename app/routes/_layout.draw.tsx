import { json, redirect, type LoaderFunctionArgs, type ActionFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

// 生成随机签号
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const existingSignNumber = url.searchParams.get("signNumber");
  
  // 如果已经有签号，使用现有的
  if (existingSignNumber) {
    return json({ signNumber: parseInt(existingSignNumber, 10) });
  }
  
  // 否则生成新的签号 (1-100)
  const signNumber = Math.floor(Math.random() * 100) + 1;
  return json({ signNumber });
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

  // 处理其他意图
  if (intent === "divine") {
    return redirect(`/divine?signNumber=${signNumber}`);
  } else if (intent === "result") {
    return redirect(`/result?signNumber=${signNumber}`);
  }
  
  // 如果没有有效的 intent，返回到首页
  return redirect("/");
}

export default function Draw() {
  const { signNumber } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col justify-between bg-amber-50/30 py-3">
      {/* 签号显示 */}
      <div className="text-center py-6">
        <div className="bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-6 mx-2 inline-block">
          <div className="mb-3">
            <i className="fas fa-scroll text-yellow-800/90 text-3xl"></i>
          </div>
          <h2 className="text-xl font-bold text-yellow-900 mb-2">第 {signNumber} 签</h2>
          <p className="text-yellow-900/80 text-xs">仙签已定，是否需要投掷圣杯确认？</p>
        </div>
      </div>

      {/* 按钮区域 */}
      <div className="px-4 space-y-4">
        <Form method="post">
          <input type="hidden" name="signNumber" value={signNumber} />
          <input type="hidden" name="intent" value="divine" />
          <button
            type="submit"
            className="w-full py-3 px-4 text-yellow-50 text-base font-medium bg-gradient-to-r from-yellow-800 to-yellow-700 rounded-lg shadow-md transition-all duration-300 hover:from-yellow-700 hover:to-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50"
          >
            <i className="fas fa-hands-praying mr-2"></i>
            投掷圣杯
          </button>
        </Form>

        <Form method="post">
          <input type="hidden" name="signNumber" value={signNumber} />
          <input type="hidden" name="intent" value="result" />
          <button
            type="submit"
            className="w-full py-3 px-4 text-yellow-900 text-base font-medium bg-gradient-to-r from-amber-200 to-yellow-200 rounded-lg shadow-md transition-all duration-300 hover:from-amber-300 hover:to-yellow-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50 border border-yellow-900/20"
          >
            <i className="fas fa-book-open mr-2"></i>
            立即解签
          </button>
        </Form>
      </div>

      {/* 说明文字 */}
      <div className="px-4 py-6">
        <div className="bg-white/60 rounded-lg p-3 border border-yellow-900/10">
          <p className="text-yellow-900/80 text-xs leading-5">
            <i className="fas fa-info-circle mr-1 text-yellow-700"></i>
            投掷圣杯可获得神明加持，解签更准确。直接解签则不含神明指示。
          </p>
        </div>
      </div>
    </div>
  );
}
