import type { MetaFunction } from "@remix-run/cloudflare";

export const createMetaTags = (
  title: string,
  description: string,
  keywords: string,
  path: string = "/"
): ReturnType<MetaFunction> => {
  const baseUrl = "https://pooclouds.uk";
  
  return [
    { title: `${title} | 黄大仙灵签殿堂` },
    { name: "description", content: description },
    { name: "keywords", content: `${keywords},黄大仙,求签,灵签,运势,在线求签` },
    { property: "og:title", content: `${title} | 黄大仙灵签殿堂` },
    { property: "og:description", content: description },
    { property: "og:url", content: `${baseUrl}${path}` },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: `${title} | 黄大仙灵签殿堂` },
    { name: "twitter:description", content: description },
  ];
};
