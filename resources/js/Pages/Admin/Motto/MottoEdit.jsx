import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { router, useForm } from "@inertiajs/react";
import { useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import { toast } from "react-toastify";

export default function MottoEdit({ closeModal, hotel, datas }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: datas.name,
        desc: datas.desc,
        hotel_id: datas.hotel.id,
    });

    const [dataImg, setDataImg] = useState(datas.hotel.img);

    const handleHotelChange = (e) => {
        const itemId = parseInt(e.target.value);
        const item = hotel.find((item) => item.id == itemId);
        setDataImg(item.img);

        const selectedHotelId = parseInt(e.target.value);
        setData("hotel_id", selectedHotelId);
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            router.post(`motto-section/${datas.id}`, {
                _method: "patch",
                name: data.name,
                desc: data.desc,
                hotel_id: data.hotel_id,
            });
            toast.success("Done");
            closeModal();
        } catch (error) {
            toast.error("Telah Terjadi Error");
            console.error(error);
        }
    };

    // console.log(data);
    return (
        <div className={dataImg && "flex justify-around"}>
            <form
                onSubmit={submitForm}
                className={dataImg ? "w-full" : "mx-5"}
                encType="multipart/form-data"
            >
                <span className="flex justify-center items-center text-lg font-bold">
                    <p>Tambah Motto</p>
                </span>

                <div className="my-2 flex flex-col">
                    <InputLabel htmlFor="name" value="Nama" />

                    <TextInput
                        id="name"
                        type="name"
                        name="name"
                        value={data.name}
                        className="mt-1 h-10 block w-full border"
                        onChange={(e) => setData("name", e.target.value)}
                        placeholder="Masukkan nama motto..."
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div className="my-2 flex flex-col">
                    <label>Deskripsi</label>
                    <textarea
                        cols="5"
                        rows="5"
                        className="rounded-lg drop-shadow-md"
                        placeholder="Masukkan deskripsi..."
                        onChange={(e) => setData("desc", e.target.value)}
                        name="desc"
                        value={data.desc}
                    ></textarea>
                    <InputError message={errors.desc} className="mt-2" />
                </div>
                <div className="my-2 flex flex-col">
                    <InputLabel htmlFor="hotel_id" value="Pilih Hotel" />
                    <select
                        value={data.hotel_id || ""}
                        onChange={handleHotelChange}
                        className="border rounded-lg p-2"
                        defaultValue={"0"}
                    >
                        <option value="0" aria-readonly="true">
                            ~ Pilih Hotel ~
                        </option>
                        {hotel.map((hot, i) => (
                            <option key={hot.id} value={hot.id}>
                                Foto Hotel {i + 1}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex justify-between mt-5">
                    <button
                        type="button"
                        onClick={closeModal}
                        className="py-2 px-4 rounded-md bg-[#ce2f2f] text-white font-semibold"
                    >
                        Kembali
                    </button>
                    <button
                        type="submit"
                        className="py-2 px-4 rounded-md bg-[#C69749] text-white font-semibold"
                    >
                        Submit
                    </button>
                </div>
            </form>
            {dataImg && (
                <div className=" w-full flex items-center justify-center aspect-auto drop-shadow-md">
                    <img
                        src={`/storage/images/${dataImg}`}
                        width={200}
                        alt=""
                        className="rounded-md"
                    />
                </div>
            )}
        </div>
    );
}
