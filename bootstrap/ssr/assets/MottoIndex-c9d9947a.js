import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-ed054c69.js";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import MottoCreate from "./MottoCreate-c537f0f7.js";
import MottoEdit from "./MottoEdit-bef7dbe2.js";
import { usePage, router } from "@inertiajs/react";
import { useState, useRef } from "react";
import { FaRegEdit } from "react-icons/fa/index.esm.js";
import { TbTrashXFilled } from "react-icons/tb/index.esm.js";
import { toast } from "react-toastify";
import { useInView } from "react-intersection-observer";
import "./AdminLayout-5a29d7e8.js";
import "react-icons/ri/index.esm.js";
import "react-icons/fa6/index.esm.js";
import "./TextInput-4054781e.js";
import "./InputLabel-747c5b8a.js";
function ItemMotto({ datas, hotel }) {
  const [showDel, setShowDel] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [dataDelete, setDataDelete] = useState();
  const [datasEdit, setDatasEdit] = useState();
  const [dataCLick, setDataClick] = useState();
  const [click, setClick] = useState(false);
  const modalDel = useRef();
  const modalRef = useRef();
  const modalClick = useRef();
  useAnimation();
  useInView({
    triggerOnce: true
  });
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
      router.delete(`motto-section/${dataDelete.id}`);
      toast.warn("Done");
      setShowDel(!showDel);
    } catch (error) {
      toast.error("Telah Terjadi Error");
      console.error(error);
    }
  };
  function handleClick(e) {
    const item = datas.data.find((item2) => item2.id === e.id);
    if (item) {
      setDataClick(item);
      setClick(true);
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-4", children: [
    datas.data.map((data, i) => /* @__PURE__ */ jsxs("span", { className: "flex border items-center", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => handleClick(data), children: /* @__PURE__ */ jsx(
        "img",
        {
          srcSet: `/storage/images/${data.hotel.img}`,
          width: 270,
          className: "shadow-md mb-1 mt-5 ml-5"
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
    dataCLick && click && /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsx(
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
            className: "bg-white w-2/3 p-4 rounded-md modal",
            ref: modalClick,
            children: [
              /* @__PURE__ */ jsxs("p", { className: "text-center text-2xl my-4 font-bold", children: [
                "Motto ",
                dataCLick.name
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsxs("span", { className: "flex flex-col justify-center", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-center font-semibold", children: "- Hotel -" }),
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      srcSet: `/storage/images/${dataCLick.hotel.img}`,
                      width: 270,
                      className: "shadow-md mb-1 mt-3 ml-5"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 mt-10", children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Nama motto :" }),
                    /* @__PURE__ */ jsx("p", { className: "indent-4", children: dataCLick.name })
                  ] }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Deskripsi :" }),
                    /* @__PURE__ */ jsx("p", { className: "indent-4", children: dataCLick.desc })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-5", children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setClick(!click),
                  className: "py-2 px-4 rounded-md bg-[#ce2f2f] text-white font-semibold",
                  children: "Kembali"
                }
              ) })
            ]
          }
        )
      }
    ) }),
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
              MottoEdit,
              {
                datas: datasEdit,
                hotel,
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
              /* @__PURE__ */ jsx("p", { children: "Yakin ingin menghapus motto ini?" }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center rounded-md ", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: `/storage/images/${dataDelete.hotel.img}`,
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
function MottoIndex({ moto, hotel }) {
  const [modalMotto, setModalMotto] = useState();
  const modalRef = useRef();
  const modalCreate = () => {
    setModalMotto(true);
  };
  const closeModal = () => {
    setModalMotto(false);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Authenticated, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold bg-[#C69749] text-white p-2 rounded-md", children: "Data Motto" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => modalCreate(),
            className: "bg-[#C69749] p-3 text-white font-semibold rounded-md",
            children: "new data +"
          }
        ) }),
        /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(ItemMotto, { datas: moto, hotel }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: modalMotto && /* @__PURE__ */ jsx(
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
            className: "bg-white w-2/5 p-4 rounded-md modal",
            ref: modalRef,
            children: /* @__PURE__ */ jsx(
              MottoCreate,
              {
                closeModal,
                hotel
              }
            )
          }
        )
      }
    ) })
  ] }) });
}
export {
  MottoIndex as default
};
