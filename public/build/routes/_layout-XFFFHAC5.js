import {
  Layout
} from "/build/_shared/chunk-AXHC6Y54.js";
import {
  Outlet
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

// app/routes/_layout.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_layout.tsx"
  );
  import.meta.hot.lastModified = "1732330280596.7295";
}
function AppLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/_layout.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = AppLayout;
var _c;
$RefreshReg$(_c, "AppLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AppLayout as default
};
//# sourceMappingURL=/build/routes/_layout-XFFFHAC5.js.map
