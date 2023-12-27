import { router, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import { toast } from "react-toastify";
import noImg from "../../../../img-local/no-image.jpg";

export default function HotelEdit({ datas, closeModal }) {
    const { data, setData, patch, errors } = useForm({
        id: datas.id,
        img: "",
        oldimage: datas.hotel,
    });

    const [imgBefore, setImgBefore] = useState();
    useEffect(() => {
        async function fetchImage() {
            try {
                const response = await fetch(`/storage/images/${datas.hotel}`);
                if (response.ok) {
                    setImgBefore(`/storage/images/${datas.hotel}`);
                } else {
                    setImgBefore(noImg);
                }
            } catch (error) {
                console.error("Error fetching image:", error);
            }
        }
        if (datas.hotel) {
            fetchImage();
        }
    }, [datas.hotel]);

    const submit = async (e) => {
        e.preventDefault();
        try {
            router.post(`hotel/${data.id}`, {
                _method: "patch",
                img: data.img,
                oldimage: data.oldimage,
            });
            toast.success("Done");
            closeModal();
        } catch (error) {
            toast.error("Telah Terjadi Error");
            console.error(error);
        }
    };
    return (
        <div>
            <form
                onSubmit={submit}
                className="mx-5"
                encType="multipart/form-data"
            >
                <span className="flex justify-center items-center text-lg font-bold">
                    <p>Edit Hotel</p>
                </span>
                <div className="my-2 flex flex-col">
                    <label htmlFor="img">Upload Gambar</label>
                    {!data.img && data.oldimage == null && (
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
                        accept="image/*"
                    />
                    {errors.img && (
                        <span className="text-red-500">{errors.img}</span>
                    )}
                    <div>
                        <label
                            htmlFor="img"
                            className="flex justify-center items-center rounded-md "
                        >
                            <img
                                src={
                                    data.img
                                        ? URL.createObjectURL(data.img)
                                        : imgBefore
                                }
                                alt="Image Preview"
                                style={{ maxWidth: "160px" }}
                                className="rounded-md drop-shadow-md"
                            />
                        </label>
                    </div>
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
                    onClick={submit}
                    type="submit"
                    className="py-2 px-4 rounded-md bg-[#C69749] text-white font-semibold"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
