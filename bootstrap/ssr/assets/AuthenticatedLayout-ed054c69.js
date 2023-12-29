import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import AdminLayout from "./AdminLayout-5a29d7e8.js";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
function Authenticated({ user, header, children }) {
  useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ToastContainer, {}),
    /* @__PURE__ */ jsx(AdminLayout, { user, children })
  ] });
}
export {
  Authenticated as A
};
