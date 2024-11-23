import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-URNGURX4.js";
import {
  createHotContext
} from "/build/_shared/chunk-I5E5CPR5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-HDQJTP7P.js";
import "/build/_shared/chunk-NITTFCHE.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_layout.draw.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_layout.draw.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_layout.draw.tsx"
  );
  import.meta.hot.lastModified = "1732330280595.543";
}
function Draw() {
  _s();
  const {
    signNumber
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-[calc(100vh-6rem)] flex flex-col justify-between bg-amber-50/30 py-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gradient-to-b from-yellow-50 to-amber-100/70 rounded-lg border-2 border-yellow-800/30 px-4 py-6 mx-2 inline-block", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-scroll text-yellow-800/90 text-3xl" }, void 0, false, {
        fileName: "app/routes/_layout.draw.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout.draw.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-yellow-900 mb-2", children: [
        "\u7B2C ",
        signNumber,
        " \u7B7E"
      ] }, void 0, true, {
        fileName: "app/routes/_layout.draw.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-yellow-900/80 text-xs", children: "\u4ED9\u7B7E\u5DF2\u5B9A\uFF0C\u662F\u5426\u9700\u8981\u6295\u63B7\u5723\u676F\u786E\u8BA4\uFF1F" }, void 0, false, {
        fileName: "app/routes/_layout.draw.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout.draw.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout.draw.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "signNumber", value: signNumber }, void 0, false, {
          fileName: "app/routes/_layout.draw.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "divine" }, void 0, false, {
          fileName: "app/routes/_layout.draw.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full py-3 px-4 text-yellow-50 text-base font-medium bg-gradient-to-r from-yellow-800 to-yellow-700 rounded-lg shadow-md transition-all duration-300 hover:from-yellow-700 hover:to-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-hands-praying mr-2" }, void 0, false, {
            fileName: "app/routes/_layout.draw.tsx",
            lineNumber: 94,
            columnNumber: 13
          }, this),
          "\u6295\u63B7\u5723\u676F"
        ] }, void 0, true, {
          fileName: "app/routes/_layout.draw.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout.draw.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "signNumber", value: signNumber }, void 0, false, {
          fileName: "app/routes/_layout.draw.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "result" }, void 0, false, {
          fileName: "app/routes/_layout.draw.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full py-3 px-4 text-yellow-900 text-base font-medium bg-gradient-to-r from-amber-200 to-yellow-200 rounded-lg shadow-md transition-all duration-300 hover:from-amber-300 hover:to-yellow-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 focus:ring-offset-yellow-50 border border-yellow-900/20", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-book-open mr-2" }, void 0, false, {
            fileName: "app/routes/_layout.draw.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          "\u7ACB\u5373\u89E3\u7B7E"
        ] }, void 0, true, {
          fileName: "app/routes/_layout.draw.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout.draw.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout.draw.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/60 rounded-lg p-3 border border-yellow-900/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-yellow-900/80 text-xs leading-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fas fa-info-circle mr-1 text-yellow-700" }, void 0, false, {
        fileName: "app/routes/_layout.draw.tsx",
        lineNumber: 113,
        columnNumber: 13
      }, this),
      "\u6295\u63B7\u5723\u676F\u53EF\u83B7\u5F97\u795E\u660E\u52A0\u6301\uFF0C\u89E3\u7B7E\u66F4\u51C6\u786E\u3002\u76F4\u63A5\u89E3\u7B7E\u5219\u4E0D\u542B\u795E\u660E\u6307\u793A\u3002"
    ] }, void 0, true, {
      fileName: "app/routes/_layout.draw.tsx",
      lineNumber: 112,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout.draw.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout.draw.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout.draw.tsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
}
_s(Draw, "CsYgdCazccZnNbay7v4l5VFNiB4=", false, function() {
  return [useLoaderData];
});
_c = Draw;
var _c;
$RefreshReg$(_c, "Draw");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Draw as default
};
//# sourceMappingURL=/build/routes/_layout.draw-BFNVSQXF.js.map
