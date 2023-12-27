import ItemHotel from "@/Components/ItemHotel/ItemHotel";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import HotelCreate from "./HotelCreate";

function HotelIndex({ hotel }) {
    const [modalHotel, setModalHotel] = useState();
    const modalRef = useRef();

    const modalCreate = () => {
        setModalHotel(true);
    };
    const closeModal = () => {
        setModalHotel(false);
    };
    return (
        <>
            <Authenticated>
                <div className="flex flex-col gap-y-10 items-center">
                    <span className="text-lg font-semibold bg-[#C69749] text-white p-2 rounded-md">
                        Foto Hotel
                    </span>
                    <div>
                        <div className="flex justify-end">
                            <button
                                onClick={modalCreate}
                                className="bg-[#C69749] p-3 text-white font-semibold rounded-md"
                            >
                                new data +
                            </button>
                        </div>
                        <>
                            <ItemHotel datas={hotel} />
                        </>
                    </div>
                    <AnimatePresence>
                        {modalHotel && (
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
                                    <HotelCreate closeModal={closeModal} />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Authenticated>
        </>
    );
}

export default HotelIndex;
