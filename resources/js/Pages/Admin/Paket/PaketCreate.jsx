import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PaketCreate({ closeModal }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        img: "",
        remember: false,
    });

    console.log(data);

    const submit = (e) => {
        e.preventDefault();
        toast.success("Paket Has Been Created!");
        post(route("paket.store"));
    };

    const submitForm = (e) => {
        submit(e);
    };

    return (
        <div>
            <form
                onSubmit={submit}
                className="mx-5"
                encType="multipart/form-data"
            >
                <span className="flex justify-center items-center text-lg font-bold">
                    <p>Tambah Paket</p>
                </span>

                <div className="my-2 flex flex-col">
                    <label htmlFor="img">Upload Gambar</label>
                    {!data.img && (
                        <label
                            htmlFor="img"
                            className="bg-slate-300/70 rounded-lg my-4 drop-shadow-md"
                        >
                            <span className="flex items-center gap-2 justify-center py-16 font-semibold">
                                <RiImageAddLine className="font-bold" />
                                <p>Pilih Gambar</p>
                            </span>
                        </label>
                    )}
                    <input
                        type="file"
                        id="img"
                        name="img"
                        onChange={(e) => setData("img", e.target.files[0])}
                        className="hidden"
                    />
                    {errors.img && (
                        <span className="text-red-500">{errors.img}</span>
                    )}
                    {data.img && (
                        <div>
                            <label
                                htmlFor="img"
                                className="flex justify-center items-center rounded-md "
                            >
                                <img
                                    src={URL.createObjectURL(data.img)}
                                    alt="Image Preview"
                                    style={{ maxWidth: "160px" }}
                                    className="rounded-md drop-shadow-md"
                                />
                            </label>
                        </div>
                    )}
                </div>
                <div className="my-2">
                    <InputLabel htmlFor="name" value="Nama" />

                    <TextInput
                        id="name"
                        type="name"
                        name="name"
                        value={data.name}
                        className="mt-1 h-10 block w-full border"
                        onChange={(e) => setData("name", e.target.value)}
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
            </form>
            <div className="flex justify-between mt-5">
                <button
                    onClick={closeModal}
                    className="py-2 px-4 rounded-md bg-[#ce2f2f] text-white font-semibold"
                >
                    Kembali
                </button>
                <button
                    onClick={submitForm}
                    type="submit"
                    className="py-2 px-4 rounded-md bg-[#C69749] text-white font-semibold"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
export default PaketCreate;
