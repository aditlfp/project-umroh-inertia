import { useForm } from "@inertiajs/react";
import { RiImageAddLine } from "react-icons/ri";
import { toast } from "react-toastify";

export default function HotelCreate({ closeModal }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        img: "",
    });
    const submit = (e) => {
        e.preventDefault();
        if (!data.img) {
            // Show an error toast message when image field is empty
            toast.error("Tolong Masukkan Gambar");
            return; // Prevent further execution of the form submission
        }
        post(route("hotel.store"), {
            onSuccess: () => {
                toast.success("Hotel Has Been Created!");
                closeModal();
            },
        });
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
                    <p>Tambah Foto Hotel</p>
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
                        accept="image/*"
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
