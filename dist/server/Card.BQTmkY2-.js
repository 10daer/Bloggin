import { jsx } from "react/jsx-runtime";
function Card({ children, className = "" }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `bg-white rounded-lg shadow-md overflow-hidden ${className}`,
      children
    }
  );
}
export {
  Card as C
};
