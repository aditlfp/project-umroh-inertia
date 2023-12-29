import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { IoCloseCircleOutline } from "react-icons/io5/index.esm.js";
import { RiWhatsappFill } from "react-icons/ri/index.esm.js";
import { FaRegEdit } from "react-icons/fa/index.esm.js";
import { useInView } from "react-intersection-observer";
import { n as noImg } from "./no-image-61e7ae96.js";
import { M as Modal } from "./Modal-0ac91db8.js";
import { TbTrashXFilled } from "react-icons/tb/index.esm.js";
import PaketEdit from "./PaketEdit-8d04c840.js";
import { usePage, router } from "@inertiajs/react";
import { toast } from "react-toastify";
const bgUmroh = "/build/assets/umroh-6db9e710.jpg";
function ItemsPaket({ datas, sendDataToParent, edit, delet, dataEdit }) {
  const [show, setShow] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [datasEdit, setDatasEdit] = useState();
  const [dataDelete, setDataDelete] = useState();
  const [image, setImage] = useState();
  const [id, setId] = useState();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true
  });
  const page = usePage();
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  const handleClick = async (data) => {
    const item = datas.data.find((item2) => item2.id == data.id);
    if (item) {
      const { img } = item;
      const response = await fetch(`/storage/images/${img}`);
      if (response.ok) {
        setImage("/storage/images/" + img);
      } else {
        setImage(noImg);
      }
      setId(id);
      setShow(!show);
    }
  };
  const handleClickWa = () => {
    const phone_number = 6281334264357;
    window.open(
      `https://api.whatsapp.com/send/?phone=${phone_number}&text=${id}&type=phone_number&app_absent=0`,
      "_blank"
    );
  };
  function handleDelete(id2) {
    const item = datas.data.find((item2) => item2.id === id2);
    setShowDel(!showDel);
    setDataDelete(item);
  }
  const handleDeleted = async (e) => {
    e.preventDefault();
    try {
      router.delete(`paket/${dataDelete.id}`);
      toast.warn("Done");
      setShowDel(!showDel);
    } catch (error) {
      toast.error("Telah Terjadi Error");
      console.error(error);
    }
  };
  function handleEdit(id2) {
    const item = datas.data.find((item2) => item2.id === id2);
    setShowEdit(!showEdit);
    setDatasEdit(item);
  }
  const modalRef = useRef(null);
  const modalDel = useRef(null);
  const [imageExistsArray, setImageExistsArray] = useState([]);
  const [imageLoading, setImageLoading] = useState(true);
  useEffect(() => {
    const checkImageExists = async (imgPath) => {
      try {
        const response = await fetch(`/storage/images/${imgPath}`);
        return response.ok;
      } catch (error) {
        return false;
      }
    };
    if (datas.data) {
      const promises = datas.data.map(
        (item) => checkImageExists(item.img)
      );
      Promise.all(promises).then((results) => {
        setImageExistsArray(results);
        setImageLoading(false);
      }).catch((error) => {
        console.error("Error checking image existence:", error);
      });
    }
  }, [datas == null ? void 0 : datas.data]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "grid grid-cols-4 gap-4 ml-8 sm:ml-0",
      id: "pilihan-paket",
      children: [
        /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx(
          "link",
          {
            href: "https://fonts.cdnfonts.com/css/jano-sans-pro",
            rel: "stylesheet"
          }
        ) }),
        datas.data.map((data, i) => /* @__PURE__ */ jsx(
          motion.span,
          {
            className: "flex items-center  mt-5 w-[125%] sm:w-[100%]",
            whileHover: { scale: 1.1 },
            children: !imageLoading && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
              motion.span,
              {
                className: "flex border items-center",
                ref,
                initial: { opacity: 0, y: 20 },
                animate: controls,
                transition: { duration: 0.6 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center ", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: imageExistsArray[i] ? `/storage/images/${data.img}` : noImg,
                      alt: "image",
                      width: imageExistsArray[i] ? 270 : 170,
                      className: "shadow-md my-5 mx-5",
                      onClick: () => handleClick(data),
                      onLoad: () => setImageLoading(false)
                    }
                  ) }),
                  page.props.auth.user && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2", children: [
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
                        name: "buttonDelete",
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
                        name: "buttonEdit",
                        children: /* @__PURE__ */ jsx(FaRegEdit, { className: "text-yellow-500 ml-0.5 text-xl" })
                      }
                    )
                  ] })
                ]
              }
            ) })
          },
          i
        )),
        image && /* @__PURE__ */ jsx(Modal, { id, show, children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-center bg-no-repeat bg-cover  flex flex-col justify-center items-center",
            style: { backgroundImage: `url(${bgUmroh})` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("button", { onClick: () => setShow(!show), children: /* @__PURE__ */ jsx(IoCloseCircleOutline, { className: "text-white text-2xl font-semibold my-2" }) }) }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  srcSet: image ? image : noImg,
                  width: 314,
                  height: 457
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "bg-green-700 flex px-5 rounded-md py-2 my-2 text-xl text-white gap-x-3 hover:cursor-pointer",
                  style: {
                    fontFamily: "Jano Sans Pro, sans-serif"
                  },
                  onClick: handleClickWa,
                  children: [
                    /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsx(RiWhatsappFill, {}) }),
                    /* @__PURE__ */ jsx("span", { className: "text-md font-medium", children: "Chat Admin" })
                  ]
                }
              ) })
            ]
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
                  PaketEdit,
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
                  /* @__PURE__ */ jsxs("p", { children: [
                    "Yakin ingin menghapus ",
                    dataDelete.name,
                    "?"
                  ] }),
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
      ]
    }
  ) });
}
export {
  ItemsPaket as I
};
