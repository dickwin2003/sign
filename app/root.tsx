import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import { createWebsiteSchema, createOrganizationSchema } from "~/utils/schema";

import styles from "./tailwind.css";
import animations from "./styles/animations.css";

export const meta: MetaFunction = () => {
  return [
    { title: "黄大仙灵签殿堂 | 在线求签问事" },
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { name: "description", content: "黄大仙灵签殿堂提供在线求签服务，传承黄大仙师古法，为您指引迷津。通过专业的签文解释和运势分析，帮助您趋吉避凶。" },
    { name: "keywords", content: "黄大仙,求签,灵签,运势,在线求签,签文解释,运程预测" },
    { property: "og:title", content: "黄大仙灵签殿堂 | 在线求签问事" },
    { property: "og:description", content: "黄大仙灵签殿堂提供在线求签服务，传承黄大仙师古法，为您指引迷津。" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://pooclouds.uk" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: "黄大仙灵签殿堂 | 在线求签问事" },
    { name: "twitter:description", content: "黄大仙灵签殿堂提供在线求签服务，传承黄大仙师古法，为您指引迷津。" },
  ];
};

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: animations },
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap" },
  { rel: "canonical", href: "https://pooclouds.uk" },
];

export default function App() {
  // 生成结构化数据
  const websiteSchema = createWebsiteSchema();
  const organizationSchema = createOrganizationSchema();

  return (
    <html lang="zh-HK" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </head>
      <body className="h-full font-serif bg-gradient-to-b from-yellow-50/30 to-yellow-100/30">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
