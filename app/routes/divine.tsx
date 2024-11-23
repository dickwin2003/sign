import { json, redirect, type LoaderFunctionArgs, type ActionFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";

// 获取签号
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const signNumber = url.searchParams.get("signNumber");
  if (!signNumber) {
    return redirect("/");
  }
  return json({ signNumber });
}

// 处理圣杯结果
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const signNumber = formData.get("signNumber");
  return redirect(`/result?signNumber=${signNumber}`);
}

export default function Divine() {
  const { signNumber } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <div className="min-h-[calc(100vh-6rem)] flex flex-col justify-between bg-amber-50/30 py-3">
        {/* 圣杯说明 */}
        <div className="text-center py-6">
          <div className="bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-6 mx-2 inline-block">
            <div className="mb-3">
              <i className="fas fa-hands-praying text-yellow-800/90 text-3xl"></i>
            </div>
            <h2 className="text-xl font-bold text-yellow-900 mb-2">圣杯启示</h2>
            <p className="text-yellow-900/80 text-xs">请点击下方按钮投掷圣杯</p>
          </div>
        </div>

        {/* 圣杯动画区域 */}
        <div className="px-4 py-6">
          <div className="bg-gradient-to-b from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-900/20 p-6 text-center">
            <div className="space-y-4">
              <div className="text-6xl text-yellow-800">
                <i className="fas fa-yin-yang animate-spin"></i>
              </div>
              <p className="text-sm text-yellow-900">等待圣杯指示...</p>
            </div>
          </div>
        </div>

        {/* 按钮区域 */}
        <div className="px-4 space-y-4">
          <Form method="post">
            <input type="hidden" name="signNumber" value={signNumber} />
            <button
              type="submit"
              className="w-full py-3 px-4 text-yellow-50 text-base font-medium bg-gradient-to-r from-yellow-800 to-yellow-700 rounded-lg shadow-md transition-all duration-300 hover:from-yellow-700 hover:to-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50"
            >
              <i className="fas fa-dice mr-2"></i>
              投掷圣杯
            </button>
          </Form>
        </div>

        {/* 说明文字 */}
        <div className="px-4 py-6">
          <div className="bg-white/60 rounded-lg p-3 border border-yellow-900/10">
            <p className="text-yellow-900/80 text-xs leading-5">
              <i className="fas fa-info-circle mr-1 text-yellow-700"></i>
              圣杯为阴阳两面，代表神明的指示。请虔诚投掷，静候启示。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
