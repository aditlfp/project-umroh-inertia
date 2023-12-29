import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import FotoEdit from "./FotoEdit-2d2fda19.js";
import { usePage, router } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { FaRegEdit } from "react-icons/fa/index.esm.js";
import { TbTrashXFilled } from "react-icons/tb/index.esm.js";
import { toast } from "react-toastify";
function ItemGalerry({ datas }) {
  const [showDel, setShowDel] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [dataDelete, setDataDelete] = useState();
  const [datasEdit, setDatasEdit] = useState();
  const modalDel = useRef();
  const modalRef = useRef();
  const page = usePage();
  function handleEdit(id) {
    const item = datas.data.find((item2) => item2.id === id);
    setShowEdit(!showEdit);
    setDatasEdit(item);
  }
  function handleDelete(id) {
    const item = datas.data.find((item2) => item2.id === id);
    setShowDel(!showDel);
    setDataDelete(item);
  }
  const handleDeleted = async (e) => {
    e.preventDefault();
    try {
      router.delete(`galery/${dataDelete.id}`);
      toast.warn("Done");
      setShowDel(!showDel);
    } catch (error) {
      toast.error("Telah Terjadi Error");
      console.error(error);
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-5", children: [
    datas == null ? void 0 : datas.data.map((data, i) => /* @__PURE__ */ jsx(
      motion.span,
      {
        className: "flex items-center mt-5 w-[125%] sm:w-[100%]",
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.9 },
            className: "shadow-md flex border items-center",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(
                "img",
                {
                  srcSet: `/storage/images/${data.img}`,
                  alt: "image",
                  width: 270,
                  className: "shadow-md my-5 mx-5"
                }
              ) }),
              page.props.auth.user && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2 ", children: [
                /* @__PURE__ */ jsx(
                  motion.button,
                  {
                    whileHover: {
                      backgroundColor: "rgb(203 213 225)",
                      cursor: "pointer"
                    },
                    whileTap: { scale: 0.5 },
                    className: "bg-slate-100 bg-opacity-50 backdrop-filter backdrop-blur-lg  backdrop-saturate-150 shadow-sm p-2 rounded-full",
                    onClick: () => handleDelete(data.id),
                    name: "buttonEdit",
                    children: /* @__PURE__ */ jsx(TbTrashXFilled, { className: "text-red-500 text-xl" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.button,
                  {
                    whileHover: {
                      backgroundColor: "rgb(203 213 225)",
                      cursor: "pointer"
                    },
                    whileTap: { scale: 0.5 },
                    className: "bg-slate-100 bg-opacity-50 backdrop-filter backdrop-blur-lg  backdrop-saturate-150 shadow-sm p-2 rounded-full",
                    onClick: () => handleEdit(data.id),
                    name: "buttonDelete",
                    children: /* @__PURE__ */ jsx(FaRegEdit, { className: "text-yellow-500 ml-0.5 text-xl" })
                  }
                )
              ] })
            ]
          },
          i
        )
      },
      i
    )),
    /* @__PURE__ */ jsx(AnimatePresence, { children: datasEdit && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed top-0 backdrop-blur-sm left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50",
        children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { y: -50, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: -50, opacity: 0 },
            className: "bg-white w-1/3 p-4 rounded-md modal",
            ref: modalRef,
            children: /* @__PURE__ */ jsx(
              FotoEdit,
              {
                datas: datasEdit,
                closeModal: () => handleEdit()
              }
            )
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: dataDelete && showDel && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed top-0 backdrop-blur-sm left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50",
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { y: -50, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: -50, opacity: 0 },
            className: "bg-white w-1/3 p-4 rounded-md modal",
            ref: modalDel,
            children: [
              /* @__PURE__ */ jsx("p", { children: "Yakin ingin menghapus Foto ini?" }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center rounded-md ", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: `/storage/images/${dataDelete.img}`,
                  alt: "Image Preview",
                  style: { maxWidth: "160px" },
                  className: "rounded-md drop-shadow-md"
                }
              ) }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-5", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setShowDel(!showDel),
                    className: "py-2 px-4 rounded-md bg-[#ce2f2f] text-white font-semibold",
                    children: "Kembali"
                  }
                ),
                /* @__PURE__ */ jsx("form", { onSubmit: handleDeleted, children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    className: "py-2 px-4 rounded-md bg-[#C69749] text-white font-semibold",
                    children: "Hapus"
                  }
                ) })
              ] })
            ]
          }
        )
      }
    ) })
  ] }) });
}
export {
  ItemGalerry as I
};
