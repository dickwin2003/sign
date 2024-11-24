import type { ActionArgs, LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Form, Link, useActionData, useFetcher, useLoaderData, useNavigation } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";

interface Env {
  DB: D1Database;
}

interface UserRow {
  user_id: number;
  email_address: string;
  created_at: number | null;
  deleted: number | null;
  settings: string | null;
}

const USER_QUERY = "SELECT * FROM users ORDER BY user_id ASC;";

export const loader = async ({ context }: LoaderArgs) => {
  const env = context.env as Env;
  const data = await env.DB.prepare(USER_QUERY).all();
  return json({
    users: data.results,
    meta: data.meta
  });
};

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  
  if (!email) {
    return json({ error: "Email is required" }, { status: 400 });
  }
  
  // 模拟处理延迟
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return json({ success: true, message: `Subscribed with email: ${email}` });
}

export default function Index() {
  const { users, meta } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const [showDemo, setShowDemo] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const fetcher = useFetcher();
  
  useEffect(() => {
    if (navigation.state === "idle" && actionData?.success) {
      formRef.current?.reset();
    }
  }, [navigation.state, actionData]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Remix Demo
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            探索 Remix 的强大特性
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setShowDemo(!showDemo)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {showDemo ? "隐藏" : "显示"}客户端状态演示
            </button>
            {showDemo && (
              <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                <p>这是一个客户端状态管理的演示</p>
                <button
                  onClick={() => setShowDemo(false)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  关闭
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Form Demo */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">表单处理演示</h2>
            <Form method="post" ref={formRef} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  邮箱订阅
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <button
                type="submit"
                disabled={navigation.state === "submitting"}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {navigation.state === "submitting" ? "提交中..." : "提交"}
              </button>
              {actionData?.error && (
                <div className="text-red-500 text-sm">{actionData.error}</div>
              )}
              {actionData?.success && (
                <div className="text-green-500 text-sm">{actionData.message}</div>
              )}
            </Form>
          </div>

          {/* Fetcher Demo */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fetcher 演示</h2>
            <p className="text-gray-600 mb-4">
              使用 useFetcher 进行后台数据获取，不影响页面导航状态
            </p>
            <button
              onClick={() => {
                fetcher.submit(
                  { email: "background@example.com" },
                  { method: "post" }
                );
              }}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              {fetcher.state === "submitting" 
                ? "处理中..." 
                : "触发后台请求"}
            </button>
            {fetcher.data && (
              <div className="mt-4 p-4 bg-green-50 rounded">
                <pre className="text-sm">{JSON.stringify(fetcher.data, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>

        {/* User List Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            用户列表 ({users.length})
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">邮箱</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">创建时间</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user: UserRow) => (
                  <tr key={user.user_id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.user_id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email_address}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.created_at ? new Date(user.created_at * 1000).toLocaleString() : 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.deleted ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {user.deleted ? '已删除' : '正常'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            查询耗时: {meta.duration.toPrecision(2)} ms
          </p>
        </div>

        {/* Documentation Links */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">相关文档</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="https://remix.run/docs"
              className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="font-bold text-blue-600">Remix 文档</h3>
              <p className="text-sm text-gray-600">了解更多 Remix 开发知识</p>
            </Link>
            <Link
              to="https://developers.cloudflare.com/d1/"
              className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="font-bold text-blue-600">D1 数据库</h3>
              <p className="text-sm text-gray-600">Cloudflare D1 详细文档</p>
            </Link>
            <Link
              to="https://developers.cloudflare.com/pages/"
              className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="font-bold text-blue-600">Cloudflare Pages</h3>
              <p className="text-sm text-gray-600">部署指南和最佳实践</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}