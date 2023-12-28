import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Achivment from "../../img-local/achivment.png";
import Spesial from "../../img-local/map.png";
import Maskapai from "../../img-local/maskapai.png";

function MottoTrippleComponent() {
    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <span className="flex gap-2 justify-center w-full">
                {/* Spesial */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="box w-1/2"
                >
                    <div
                        id="modal"
                        className="bg-white flex flex-col items-center justify-center  sm:w-48 my-5 rounded-3xl shadow-lg"
                    >
                        <div className="px-3 py-2 flex flex-col items-center justify-center mt-9">
                            <div id="img-modal">
                                <img
                                    src={Spesial}
                                    className="scale-[70%]"
                                    alt="spesial"
                                />
                            </div>
                            <div id="title" className="flex flex-col">
                                <div className="text-center text-indigo-950 font-semibold">
                                    <h1>Spesial</h1>
                                </div>
                                <div
                                    id="subtitle"
                                    className="bg-white mx-2.5 my-1 font-medium leading-relaxed text-gray-500 text-xs sm:text-md"
                                    style={{
                                        fontFamily: "Poppins, sans-serif",
                                    }}
                                >
                                    <p className="text-center font-semibold mb-9">
                                        Jarak Hotel dekat dengan masjid
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* End Spesial */}

                {/* Fasilitas */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="box w-1/2"
                >
                    <div
                        id="modal"
                        className="bg-white flex flex-col items-center justify-center w-fit rounded-3xl shadow-lg"
                    >
                        <div className="px-3 py-4 flex flex-col items-center justify-center">
                            <div id="img-modal">
                                <img
                                    src={Achivment}
                                    className="scale-[70%]"
                                    alt="achievment"
                                />
                            </div>
                            <div id="title" className="flex flex-col">
                                <div className="text-center text-indigo-950 font-semibold">
                                    <h1>Fasilitas</h1>
                                </div>
                                <div
                                    id="subtitle"
                                    className="bg-white mx-2.5 my-1 font-medium leading-relaxed text-gray-500 text-md"
                                    style={{
                                        fontFamily: "Poppins, sans-serif",
                                    }}
                                >
                                    <div className="font-semibold text-xs sm:text-md mb-10">
                                        <ul className="list-disc flex flex-col items-center justify-center text-center">
                                            <li>Visa Umroh</li>
                                            <li>ZAM-ZAM</li>
                                            <li>Asuransi</li>
                                            <li>Mutawwif & Tour Guide</li>
                                            <li>City Tour</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* End Fasilitas */}
            </span>
        </>
    );
}

export default MottoTrippleComponent;
