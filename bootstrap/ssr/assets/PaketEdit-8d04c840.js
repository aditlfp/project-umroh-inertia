import { jsxs, jsx } from "react/jsx-runtime";
import { T as TextInput, I as InputError } from "./TextInput-4054781e.js";
import { I as InputLabel } from "./InputLabel-747c5b8a.js";
import { useForm, router } from "@inertiajs/react";
import { RiImageAddLine } from "react-icons/ri/index.esm.js";
import { toast } from "react-toastify";
/* empty css                        */import { n as noImg } from "./no-image-61e7ae96.js";
import { useState, useEffect } from "react";
function PaketEdit({ closeModal, datas }) {
  const { data, setData, patch, errors } = useForm({
    id: datas.id,
    name: datas.name,
    img: "",
    oldimage: datas.img
  });
  const [imgBefore, setImgBefore] = useState();
  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch(`/storage/images/${datas.img}`);
        if (response.ok) {
          setImgBefore(`/storage/images/${datas.img}`);
        } else {
          setImgBefore(noImg);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    }
    if (datas.img) {
      fetchImage();
    }
  }, [datas.img]);
  const submit = async (e) => {
    e.preventDefault();
    try {
      router.post(`paket/${data.id}`, {
        _method: "patch",
        name: data.name,
        img: data.img,
        oldimage: data.oldimage
      });
      toast.success("Done");
      closeModal();
    } catch (error) {
      toast.error("Telah Terjadi Error");
      console.error(error);
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: submit,
        className: "mx-5",
        encType: "multipart/form-data",
        children: [
          /* @__PURE__ */ jsx("span", { className: "flex justify-center items-center text-lg font-bold", children: /* @__PURE__ */ jsxs("p", { children: [
            "Edit Paket ",
            datas.name
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "my-2 flex flex-col", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "img", children: "Upload Gambar" }),
            !data.img && data.oldimage == null && /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "img",
                className: "bg-slate-300/70 rounded-lg my-4 drop-shadow-md",
                children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 justify-center py-16 font-semibold", children: [
                  /* @__PURE__ */ jsx(RiImageAddLine, { className: "font-bold" }),
                  /* @__PURE__ */ jsx("p", { children: "Pilih Gambar" })
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "file",
                id: "img",
                name: "img",
                onChange: (e) => setData("img", e.target.files[0]),
                className: "hidden",
                accept: "image/*"
              }
            ),
            errors.img && /* @__PURE__ */ jsx("span", { className: "text-red-500", children: errors.img }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "img",
                className: "flex justify-center items-center rounded-md ",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: data.img ? URL.createObjectURL(data.img) : imgBefore,
                    alt: "Image Preview",
                    style: { maxWidth: "160px" },
                    className: "rounded-md drop-shadow-md"
                  }
                )
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "my-2", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Nama" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "name",
                type: "name",
                name: "name",
                value: data.name,
                className: "mt-1 h-10 block w-full border",
                onChange: (e) => setData("name", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-5", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: closeModal,
          className: "py-2 px-4 rounded-md bg-[#ce2f2f] text-white font-semibold",
          children: "Kembali"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: submit,
          className: "py-2 px-4 rounded-md bg-[#C69749] text-white font-semibold",
          children: "Submit"
        }
      )
    ] })
  ] });
}
export {
  PaketEdit as default
};
