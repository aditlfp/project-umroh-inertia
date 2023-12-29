import { jsxs, jsx } from "react/jsx-runtime";
import { T as TextInput, I as InputError } from "./TextInput-4054781e.js";
import { I as InputLabel } from "./InputLabel-747c5b8a.js";
import { useForm } from "@inertiajs/react";
import "react";
import { RiImageAddLine } from "react-icons/ri/index.esm.js";
import { toast } from "react-toastify";
/* empty css                        */function PaketCreate({ closeModal }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    img: "",
    remember: false
  });
  const submit = (e) => {
    e.preventDefault();
    if (!data.img) {
      toast.error("Tolong Masukkan Gambar");
      return;
    } else if (!data.name) {
      toast.error("Tolong Masukkan Nama");
      return;
    }
    post(route("paket.store"), {
      onSuccess: () => {
        toast.success("Paket Has Been Created!");
        closeModal();
      }
    });
  };
  const submitForm = (e) => {
    submit(e);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: submit,
        className: "mx-5",
        encType: "multipart/form-data",
        children: [
          /* @__PURE__ */ jsx("span", { className: "flex justify-center items-center text-lg font-bold", children: /* @__PURE__ */ jsx("p", { children: "Tambah Paket" }) }),
          /* @__PURE__ */ jsxs("div", { className: "my-2 flex flex-col", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "img", children: "Upload Gambar" }),
            !data.img && /* @__PURE__ */ jsx(
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
            data.img && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "img",
                className: "flex justify-center items-center rounded-md ",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: URL.createObjectURL(data.img),
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
          onClick: submitForm,
          type: "submit",
          className: "py-2 px-4 rounded-md bg-[#C69749] text-white font-semibold",
          children: "Submit"
        }
      )
    ] })
  ] });
}
export {
  PaketCreate as default
};
