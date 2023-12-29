import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { I as ItemsPaket } from "./ItemsPaket-90e5b861.js";
import { A as Authenticated } from "./AuthenticatedLayout-ed054c69.js";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import PaketCreate from "./PaketCreate-60517882.js";
import { ToastContainer } from "react-toastify";
/* empty css                        */import { usePage } from "@inertiajs/react";
import "react-helmet";
import "react-icons/io5/index.esm.js";
import "react-icons/ri/index.esm.js";
import "react-icons/fa/index.esm.js";
import "react-intersection-observer";
import "./no-image-61e7ae96.js";
import "./Modal-0ac91db8.js";
import "@headlessui/react";
import "react-icons/tb/index.esm.js";
import "./PaketEdit-8d04c840.js";
import "./TextInput-4054781e.js";
import "./InputLabel-747c5b8a.js";
import "./AdminLayout-5a29d7e8.js";
import "react-icons/fa6/index.esm.js";
function PaketIndex({ paket }) {
  const [modalPaket, setModalPaket] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState(false);
  const [loading, setLoading] = useState();
  usePage();
  const modalRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalPaket(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const modalCreate = () => {
    setModalPaket(true);
  };
  const closeModal = () => {
    setModalPaket(false);
  };
  function handleDelete() {
    setShowDel(!showDel);
  }
  function handleEdit() {
    setShowEdit(!showEdit);
  }
  const handleDataFromChild = (data) => {
    setLoading(data);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ToastContainer, {}),
    /* @__PURE__ */ jsxs(Authenticated, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold bg-[#C69749] text-white p-2 rounded-md", children: "Data Paket" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => modalCreate,
              className: "bg-[#C69749] p-3 text-white font-semibold rounded-md",
              children: "new data +"
            }
          ) }),
          /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
            ItemsPaket,
            {
              datas: paket,
              handleDelete: () => handleDelete(),
              handleEdit: () => handleEdit(),
              edit: showEdit,
              delet: showDel,
              dataEdit,
              sendDataToParent: handleDataFromChild
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(AnimatePresence, { children: modalPaket && /* @__PURE__ */ jsx(
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
              children: /* @__PURE__ */ jsx(PaketCreate, { closeModal })
            }
          )
        }
      ) })
    ] })
  ] });
}
export {
  PaketIndex as default
};
