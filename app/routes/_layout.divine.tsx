import { json, redirect, type LoaderFunctionArgs, type ActionFunctionArgs } from "@remix-run/cloudflare";
import { Form, useLoaderData } from "@remix-run/react";
import { useState, useEffect } from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const signNumber = url.searchParams.get("signNumber");
  
  if (!signNumber) {
    return redirect("/");
  }

  return json({ signNumber });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const signNumber = formData.get("signNumber");
  const intent = formData.get("intent");
  
  // 如果是投掷圣杯的请求
  if (intent === "throw") {
    // 随机决定结果：30% 概率得到圣杯（阳杯）
    const cupResult = Math.random() < 0.3 ? "yang" : "yin";
    
    // 如果是阴杯，返回首页重新求签
    if (cupResult === "yin") {
      return redirect("/");
    }
    
    // 如果是圣杯（阳杯），进入解签页面
    return redirect(`/result?signNumber=${signNumber}`);
  }
  
  // 其他情况返回首页
  return redirect("/");
}

export default function Divine() {
  const { signNumber } = useLoaderData<typeof loader>();
  const [isShaking, setIsShaking] = useState(false);

  // 投掷圣杯的动画效果
  useEffect(() => {
    if (isShaking) {
      const timer = setTimeout(() => {
        setIsShaking(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isShaking]);

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col justify-between bg-amber-50/30 py-3">
      {/* 标题 */}
      <div className="text-center py-6">
        <div className="bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-6 mx-2 inline-block">
          <div className="mb-3">
            <i className="fas fa-hands-praying text-yellow-800/90 text-3xl"></i>
          </div>
          <h2 className="text-xl font-bold text-yellow-900 mb-2">投掷圣杯</h2>
          <p className="text-yellow-900/80 text-xs">诚心祈祷，等待神明指示</p>
        </div>
      </div>

      {/* 圣杯区域 */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="relative w-full max-w-xs aspect-square bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-4 flex items-center justify-center">
          {/* 圣杯图案 */}
          <div className={`transform transition-all duration-500 ${isShaking ? 'animate-shake' : ''}`}>
            <div className="relative">
              <i className="fas fa-moon text-6xl text-yellow-800/80 absolute top-0 left-0 transform -rotate-45"></i>
              <i className="fas fa-moon text-6xl text-yellow-800/80 absolute top-0 right-0 transform rotate-45"></i>
            </div>
          </div>
        </div>
      </div>

      {/* 按钮区域 */}
      <div className="px-4 space-y-4">
        <Form method="post" onSubmit={() => setIsShaking(true)}>
          <input type="hidden" name="signNumber" value={signNumber} />
          <input type="hidden" name="intent" value="throw" />
          <button
            type="submit"
            disabled={isShaking}
            className="w-full py-3 px-4 text-yellow-50 text-base font-medium bg-gradient-to-r from-yellow-800 to-yellow-700 rounded-lg shadow-md transition-all duration-300 hover:from-yellow-700 hover:to-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50 disabled:opacity-50"
          >
            <i className="fas fa-hands-praying mr-2"></i>
            {isShaking ? '诚心祈祷...' : '投掷圣杯'}
          </button>
        </Form>
      </div>

      {/* 说明文字 */}
      <div className="px-4 py-6">
        <div className="bg-white/60 rounded-lg p-3 border border-yellow-900/10">
          <p className="text-yellow-900/80 text-xs leading-5">
            <i className="fas fa-info-circle mr-1 text-yellow-700"></i>
            投掷圣杯时需虔诚祈祷。若得圣杯（阳杯），则可解签；若为阴杯，需重新求签。
          </p>
        </div>
      </div>
    </div>
  );
}
