import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { TbTrashXFilled } from "react-icons/tb";
import Modal from "../Modal";
import { router, usePage } from "@inertiajs/react";
import { toast } from "react-toastify";
import HotelEdit from "@/Pages/Admin/Hotel/HotelEdit";

function ItemHotel({ datas }) {
    const [showDel, setShowDel] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [dataDelete, setDataDelete] = useState();
    const [datasEdit, setDatasEdit] = useState();
    const modalDel = useRef();
    const modalRef = useRef();

    const page = usePage();
    function handleEdit(id) {
        const item = datas.data.find((item) => item.id === id);
        setShowEdit(!showEdit);
        setDatasEdit(item);
    }
    function handleDelete(id) {
        const item = datas.data.find((item) => item.id === id);
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

    return (
        <div className="grid grid-cols-4 gap-4">
            {datas.data.map((data, i) => (
                <span className="flex border items-center" key={i}>
                    <div>
                        <img
                            srcSet={`/storage/images/${data.hotel}`}
                            width={270}
                            className="shadow-md my-5 ml-5"
                        />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <motion.div
                            whileHover={{
                                backgroundColor: "rgb(203 213 225)",
                                cursor: "pointer",
                            }}
                            whileTap={{ scale: 0.1 }}
                            className="bg-slate-100 shadow-sm p-2 rounded-full"
                            onClick={() => handleDelete(data.id)}
                        >
                            <TbTrashXFilled className="text-red-500 text-xl" />
                        </motion.div>
                        <motion.div
                            whileHover={{
                                backgroundColor: "rgb(203 213 225)",
                                cursor: "pointer",
                            }}
                            whileTap={{ scale: 0.1 }}
                            className="bg-slate-100 shadow-sm p-2 rounded-full"
                            onClick={() => handleEdit(data.id)}
                        >
                            <FaRegEdit className="text-yellow-500 ml-0.5 text-xl" />
                        </motion.div>
                    </div>
                </span>
            ))}

            <AnimatePresence>
                {datasEdit && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed top-0 backdrop-blur-sm left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
                    >
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            className="bg-white w-1/3 p-4 rounded-md modal"
                            ref={modalRef}
                        >
                            {/* Your modal content goes here */}
                            <HotelEdit
                                datas={datasEdit}
                                closeModal={() => handleEdit()}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {dataDelete && showDel && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed top-0 backdrop-blur-sm left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
                    >
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            className="bg-white w-1/3 p-4 rounded-md modal"
                            ref={modalDel}
                        >
                            {/* Your modal content goes here */}
                            <p>Yakin ingin menghapus Foto Hotel ini?</p>
                            <div>
                                <div className="flex justify-center items-center rounded-md ">
                                    <img
                                        src={`/storage/images/${dataDelete.hotel}`}
                                        alt="Image Preview"
                                        style={{ maxWidth: "160px" }}
                                        className="rounded-md drop-shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between mt-5">
                                <button
                                    onClick={() => setShowDel(!showDel)}
                                    className="py-2 px-4 rounded-md bg-[#ce2f2f] text-white font-semibold"
                                >
                                    Kembali
                                </button>
                                <form onSubmit={handleDeleted}>
                                    <button
                                        type="submit"
                                        className="py-2 px-4 rounded-md bg-[#C69749] text-white font-semibold"
                                    >
                                        Hapus
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ItemHotel;
