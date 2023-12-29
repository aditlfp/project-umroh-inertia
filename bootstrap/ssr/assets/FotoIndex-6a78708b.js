import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { I as ItemGalerry } from "./ItemGalerry-c4fb829e.js";
import { A as Authenticated } from "./AuthenticatedLayout-ed054c69.js";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";
import "react-toastify";
import FotoCreate from "./FotoCreate-d2e49c4c.js";
import "./FotoEdit-2d2fda19.js";
import "@inertiajs/react";
import "react-icons/ri/index.esm.js";
import "react-icons/fa/index.esm.js";
import "react-icons/tb/index.esm.js";
import "./AdminLayout-5a29d7e8.js";
import "react-icons/fa6/index.esm.js";
function FotoIndex({ foto }) {
  const [modalFoto, setModalFoto] = useState();
  const modalRef = useRef();
  const modalCreate = () => {
    setModalFoto(true);
  };
  const closeModal = () => {
    setModalFoto(false);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold bg-[#C69749] text-white p-2 rounded-md", children: "Foto Gallery" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => modalCreate(),
            className: "bg-[#C69749] p-3 text-white font-semibold rounded-md",
            children: "new data +"
          }
        ) }),
        /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(ItemGalerry, { datas: foto }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: modalFoto && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50",
        children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { y: -50, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: -50, opacity: 0 },
            className: "bg-white w-1/3 p-4 rounded-md modal",
            ref: modalRef,
            children: /* @__PURE__ */ jsx(FotoCreate, { closeModal })
          }
        )
      }
    ) })
  ] }) });
}
export {
  FotoIndex as default
};
