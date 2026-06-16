import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function Eyebrow({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "eyebrow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-px w-6 bg-primary/70" }),
    children
  ] });
}
function Chip({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip", children });
}
export {
  Chip as C,
  Eyebrow as E
};
