import { motion } from "framer-motion";
import { useState } from "react";
import { TbTrashXFilled } from "react-icons/tb";
import Modal from "../Modal";

function ItemHotel() {
    const [showDel, setShowDel] = useState(false);

    function handleDelete() {
        setShowDel(!showDel);
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            <span className="flex border items-center">
                <div>
                    <img
                        srcSet="https://placehold.co/600x400"
                        width={270}
                        className="shadow-md my-5 ml-5"
                    />
                </div>
                <motion.div
                    whileHover={{
                        backgroundColor: "rgb(203 213 225)",
                        cursor: "pointer",
                    }}
                    whileTap={{ scale: 0.1 }}
                    className="bg-slate-100 shadow-sm p-2 rounded-full"
                    onClick={() => handleDelete()}
                >
                    <TbTrashXFilled className="text-red-500 text-xl" />
                </motion.div>
            </span>
            <span className="flex border items-center">
                <div>
                    <img
                        srcSet="https://placehold.co/600x400"
                        width={270}
                        className="shadow-md my-5 ml-5"
                    />
                </div>
                <motion.div
                    whileHover={{
                        backgroundColor: "rgb(203 213 225)",
                        cursor: "pointer",
                    }}
                    whileTap={{ scale: 0.1 }}
                    className="bg-slate-100 shadow-sm p-2 rounded-full"
                    onClick={() => handleDelete()}
                >
                    <TbTrashXFilled className="text-red-500 text-xl" />
                </motion.div>
            </span>
            <span className="flex border items-center">
                <div>
                    <img
                        srcSet="https://placehold.co/600x400"
                        width={270}
                        className="shadow-md my-5 ml-5"
                    />
                </div>
                <motion.div
                    whileHover={{
                        backgroundColor: "rgb(203 213 225)",
                        cursor: "pointer",
                    }}
                    whileTap={{ scale: 0.1 }}
                    className="bg-slate-100 shadow-sm p-2 rounded-full"
                    onClick={() => handleDelete()}
                >
                    <TbTrashXFilled className="text-red-500 text-xl" />
                </motion.div>
            </span>
            <span className="flex border items-center">
                <div>
                    <img
                        srcSet="https://placehold.co/600x400"
                        width={270}
                        className="shadow-md my-5 ml-5"
                    />
                </div>
                <motion.div
                    whileHover={{
                        backgroundColor: "rgb(203 213 225)",
                        cursor: "pointer",
                    }}
                    whileTap={{ scale: 0.1 }}
                    className="bg-slate-100 shadow-sm p-2 rounded-full"
                    onClick={() => handleDelete()}
                >
                    <TbTrashXFilled className="text-red-500 text-xl" />
                </motion.div>
            </span>
            <Modal show={showDel} id="id-delete">
                Are You Sure to Delete
                <button onClick={() => handleDelete()}>close</button>
            </Modal>
        </div>
    );
}

export default ItemHotel;
