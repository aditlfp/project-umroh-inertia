import MottoEdit from "@/Pages/Admin/Motto/MottoEdit";
import { router, usePage } from "@inertiajs/react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useRef, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { TbTrashXFilled } from "react-icons/tb";
import { toast } from "react-toastify";
import { useInView } from "react-intersection-observer";

export default function ItemMotto({ datas, hotel }) {
    const [showDel, setShowDel] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [dataDelete, setDataDelete] = useState();
    const [datasEdit, setDatasEdit] = useState();
    const [dataCLick, setDataClick] = useState();
    const [click, setClick] = useState(false);
    const modalDel = useRef();
    const modalRef = useRef();
    const modalClick = useRef();
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    // console.log(datas);

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
            router.delete(`motto-section/${dataDelete.id}`);
            toast.warn("Done");
            setShowDel(!showDel);
        } catch (error) {
            toast.error("Telah Terjadi Error");
            console.error(error);
        }
    };

    function handleClick(e) {
        const item = datas.data.find((item) => item.id === e.id);
        if (item) {
            setDataClick(item);
            setClick(true);
        }
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            {datas.data.map((data, i) => (
                <span className="flex border items-center" key={i}>
                    <button onClick={() => handleClick(data)}>
                        <img
                            srcSet={`/storage/images/${data.hotel.img}`}
                            width={270}
                            className="shadow-md mb-1 mt-5 ml-5"
                        />
                    </button>
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

            {dataCLick && click && (
                <AnimatePresence>
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
                            className="bg-white w-2/3 p-4 rounded-md modal"
                            ref={modalClick}
                        >
                            {/* Your modal content goes here */}
                            <p className="text-center text-2xl my-4 font-bold">
                                Motto {dataCLick.name}
                            </p>
                            <span className="flex gap-4">
                                <span className="flex flex-col justify-center">
                                    <p className="text-center font-semibold">
                                        - Hotel -
                                    </p>
                                    <img
                                        srcSet={`/storage/images/${dataCLick.hotel.img}`}
                                        width={270}
                                        className="shadow-md mb-1 mt-3 ml-5"
                                    />
                                </span>
                                <div className="flex flex-col gap-4 mt-10">
                                    <span>
                                        <p className="font-semibold">
                                            Nama motto :
                                        </p>
                                        <p className="indent-4">
                                            {dataCLick.name}
                                        </p>
                                    </span>
                                    <span>
                                        <p className="font-semibold">
                                            Deskripsi :
                                        </p>
                                        <p className="indent-4">
                                            {dataCLick.desc}
                                        </p>
                                    </span>
                                </div>
                            </span>
                            <div className="flex justify-center mt-5">
                                <button
                                    onClick={() => setClick(!click)}
                                    className="py-2 px-4 rounded-md bg-[#ce2f2f] text-white font-semibold"
                                >
                                    Kembali
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            )}

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
                            <MottoEdit
                                datas={datasEdit}
                                hotel={hotel}
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
                            <p>Yakin ingin menghapus motto ini?</p>
                            <div>
                                <div className="flex justify-center items-center rounded-md ">
                                    <img
                                        src={`/storage/images/${dataDelete.hotel.img}`}
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
