export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "黄大仙灵签殿堂",
    "url": "https://pooclouds.uk",
    "description": "在线求签问事，传承黄大仙师古法，为您指引迷津。",
    "inLanguage": "zh-HK"
  };
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "黄大仙灵签殿堂",
    "url": "https://pooclouds.uk",
    "logo": "https://pooclouds.uk/images/logo.png",
    "description": "传承黄大仙师古法，为众生提供求签问事服务。"
  };
}

export function createBreadcrumbSchema(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function createDivinationServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "黄大仙灵签在线求签",
    "provider": {
      "@type": "Organization",
      "name": "黄大仙灵签殿堂"
    },
    "description": "提供在线求签服务，包括圣杯确认和详细解签服务",
    "serviceType": "灵签服务",
    "areaServed": "全球",
    "availableLanguage": ["zh-HK", "zh-CN"]
  };
}
