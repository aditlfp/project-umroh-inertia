import { jsxs, jsx } from "react/jsx-runtime";
import { T as TextInput, I as InputError } from "./TextInput-4054781e.js";
import { I as InputLabel } from "./InputLabel-747c5b8a.js";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { toast } from "react-toastify";
function MottoCreate({ closeModal, hotel }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    desc: "",
    hotel_id: null
  });
  const [dataImg, setDataImg] = useState();
  const handleHotelChange = (e) => {
    const itemId = parseInt(e.target.value);
    const item = hotel.find((item2) => item2.id == itemId);
    setDataImg(item.img);
    const selectedHotelId = parseInt(e.target.value);
    setData("hotel_id", selectedHotelId);
  };
  const submitForm = (e) => {
    e.preventDefault();
    post(route("motto-section.store"), {
      onSuccess: () => {
        toast.success("Motto Has Been Created!");
        closeModal();
      }
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: dataImg && "flex justify-around", children: [
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: submitForm,
        className: dataImg ? "w-full" : "mx-5",
        encType: "multipart/form-data",
        children: [
          /* @__PURE__ */ jsx("span", { className: "flex justify-center items-center text-lg font-bold", children: /* @__PURE__ */ jsx("p", { children: "Tambah Motto" }) }),
          /* @__PURE__ */ jsxs("div", { className: "my-2 flex flex-col", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Nama" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "name",
                type: "name",
                name: "name",
                value: data.name,
                className: "mt-1 h-10 block w-full border",
                onChange: (e) => setData("name", e.target.value),
                placeholder: "Masukkan nama motto..."
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "my-2 flex flex-col", children: [
            /* @__PURE__ */ jsx("label", { children: "Deskripsi" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                cols: "5",
                rows: "5",
                className: "rounded-lg drop-shadow-md",
                placeholder: "Masukkan deskripsi...",
                onChange: (e) => setData("desc", e.target.value),
                name: "desc",
                value: data.desc
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.desc, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "my-2 flex flex-col", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "hotel_id", value: "Pilih Hotel" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                value: data.hotel_id || "",
                onChange: handleHotelChange,
                className: "border rounded-lg p-2",
                defaultValue: "0",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "0", "aria-readonly": "true", children: "~ Pilih Hotel ~" }),
                  hotel.map((hot, i) => /* @__PURE__ */ jsxs("option", { value: hot.id, children: [
                    "Foto Hotel ",
                    i + 1
                  ] }, hot.id))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-5", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: closeModal,
                className: "py-2 px-4 rounded-md bg-[#ce2f2f] text-white font-semibold",
                children: "Kembali"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "py-2 px-4 rounded-md bg-[#C69749] text-white font-semibold",
                children: "Submit"
              }
            )
          ] })
        ]
      }
    ),
    dataImg && /* @__PURE__ */ jsx("div", { className: " w-full flex items-center justify-center aspect-auto drop-shadow-md", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: `/storage/images/${dataImg}`,
        width: 200,
        alt: "",
        className: "rounded-md"
      }
    ) })
  ] });
}
export {
  MottoCreate as default
};
