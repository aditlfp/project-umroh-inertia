import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { FaRegEdit } from "react-icons/fa/index.esm.js";
import { TbTrashXFilled } from "react-icons/tb/index.esm.js";
import { usePage, router } from "@inertiajs/react";
import { toast } from "react-toastify";
import HotelEdit from "./HotelEdit-cce79a46.js";
import { A as Authenticated } from "./AuthenticatedLayout-ed054c69.js";
import HotelCreate from "./HotelCreate-f68f988d.js";
import "react-icons/ri/index.esm.js";
import "./no-image-61e7ae96.js";
import "./AdminLayout-5a29d7e8.js";
import "react-icons/fa6/index.esm.js";
function ItemHotel({ datas }) {
  const [showDel, setShowDel] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [dataDelete, setDataDelete] = useState();
  const [datasEdit, setDatasEdit] = useState();
  const modalDel = useRef();
  const modalRef = useRef();
  usePage();
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
      router.delete(`hotel/${dataDelete.id}`);
      toast.warn("Done");
      setShowDel(!showDel);
    } catch (error) {
      toast.error("Telah Terjadi Error");
      console.error(error);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-4", children: [
    datas.data.map((data, i) => /* @__PURE__ */ jsxs("span", { className: "flex border items-center", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          srcSet: `/storage/images/${data.hotel}`,
          width: 270,
          className: "shadow-md my-5 ml-5"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            whileHover: {
              backgroundColor: "rgb(203 213 225)",
              cursor: "pointer"
            },
            whileTap: { scale: 0.1 },
            className: "bg-slate-100 shadow-sm p-2 rounded-full",
            onClick: () => handleDelete(data.id),
            children: /* @__PURE__ */ jsx(TbTrashXFilled, { className: "text-red-500 text-xl" })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            whileHover: {
              backgroundColor: "rgb(203 213 225)",
              cursor: "pointer"
            },
            whileTap: { scale: 0.1 },
            className: "bg-slate-100 shadow-sm p-2 rounded-full",
            onClick: () => handleEdit(data.id),
            children: /* @__PURE__ */ jsx(FaRegEdit, { className: "text-yellow-500 ml-0.5 text-xl" })
          }
        )
      ] })
    ] }, i)),
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
              HotelEdit,
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
              /* @__PURE__ */ jsx("p", { children: "Yakin ingin menghapus Foto Hotel ini?" }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center rounded-md ", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: `/storage/images/${dataDelete.hotel}`,
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
  ] });
}
function HotelIndex({ hotel }) {
  const [modalHotel, setModalHotel] = useState();
  const modalRef = useRef();
  const modalCreate = () => {
    setModalHotel(true);
  };
  const closeModal = () => {
    setModalHotel(false);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Authenticated, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-10 items-center", children: [
    /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold bg-[#C69749] text-white p-2 rounded-md", children: "Foto Hotel" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: modalCreate,
          className: "bg-[#C69749] p-3 text-white font-semibold rounded-md",
          children: "new data +"
        }
      ) }),
      /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(ItemHotel, { datas: hotel }) })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: modalHotel && /* @__PURE__ */ jsx(
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
            children: /* @__PURE__ */ jsx(HotelCreate, { closeModal })
          }
        )
      }
    ) })
  ] }) }) });
}
export {
  HotelIndex as default
};
