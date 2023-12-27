import Authenticated from "@/Layouts/AuthenticatedLayout";
import { AnimatePresence, motion } from "framer-motion";
import MottoCreate from "./MottoCreate";
import ItemMotto from "@/Components/itemMotto/ItemMotto";
import { useRef, useState } from "react";

function MottoIndex({ moto, hotel }) {
    const [modalMotto, setModalMotto] = useState();
    const modalRef = useRef();

    const modalCreate = () => {
        setModalMotto(true);
    };
    const closeModal = () => {
        setModalMotto(false);
    };
    return (
        <>
            <Authenticated>
                <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold bg-[#C69749] text-white p-2 rounded-md">
                        Data Motto
                    </span>
                    <div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => modalCreate()}
                                className="bg-[#C69749] p-3 text-white font-semibold rounded-md"
                            >
                                new data +
                            </button>
                        </div>
                        <>
                            <ItemMotto datas={moto} hotel={hotel} />
                        </>
                    </div>
                </div>
                <AnimatePresence>
                    {modalMotto && (
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
                                className="bg-white w-2/5 p-4 rounded-md modal"
                                ref={modalRef}
                            >
                                {/* Your modal content goes here */}
                                <MottoCreate
                                    closeModal={closeModal}
                                    hotel={hotel}
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Authenticated>
        </>
    );
}

export default MottoIndex;
