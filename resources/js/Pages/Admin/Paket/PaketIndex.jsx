import ItemsPaket from "@/Components/ItemPaket/ItemsPaket";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PaketCreate from "./PaketCreate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PaketIndex() {
    const [modalPaket, setModalPaket] = useState(false);

    const modalRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setModalPaket(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const modalCreate = () => {
        setModalPaket(true);
    };
    const closeModal = () => {
        setModalPaket(false);
    };

    return (
        <>
            <ToastContainer />
            <Authenticated>
                <div className="flex flex-col">
                    <ItemsPaket />
                    <div className="flex items-center justify-end mx-10">
                        <button
                            onClick={() => modalCreate()}
                            className="py-2 px-4 rounded-md bg-[#C69749] text-white font-semibold"
                        >
                            add new +
                        </button>
                    </div>
                </div>
                <AnimatePresence>
                    {modalPaket && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
                        >
                            <motion.div
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -50, opacity: 0 }}
                                className="bg-white w-1/3 p-4 rounded-md modal"
                                ref={modalRef}
                            >
                                {/* Your modal content goes here */}
                                <PaketCreate closeModal={closeModal} />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Authenticated>
        </>
    );
}

export default PaketIndex;
