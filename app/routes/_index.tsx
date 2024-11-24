import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node"; // エラーが出る
import { json } from "@remix-run/cloudflare"; // エラーが出ない

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Tailwind Demo" },
    { name: "description", content: "Welcome to Remix with Tailwind CSS!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                  Welcome to Remix with Tailwind CSS!
                </h1>
                <p className="mb-4">
                  This is a demo page showing how to use Tailwind CSS with Remix.
                </p>
                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <p>Features:</p>
                  <ul className="list-disc space-y-2 ml-8 mt-4">
                    <li>Responsive Design</li>
                    <li>Beautiful Gradients</li>
                    <li>Modern Typography</li>
                    <li>Custom Animations</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
