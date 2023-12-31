import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useInView } from "react-intersection-observer";
import bgWhite from "../../img-local/bg-white.jpg";
import Hotel from "../../img-local/hotel.png";
import Logo from "../../img-local/logo-sac.png";
import Menara from "../../img-local/menara.png";
import Modal from "./Modal";
import MottoTrippleComponent from "./MottoTrippleComponent";
import SecondaryButton from "./SecondaryButton";

function MottoComponent() {
    const [show, setShow] = useState(false);

    const handleModalShow = () => {
        setShow(!show);
    };

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.8 }}
            >
                <div className="flex gap-5 items-center justify-center">
                    <Helmet>
                        <link
                            rel="preconnect"
                            href="https://fonts.googleapis.com"
                        />
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
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="box"
                    >
                        <div
                            onClick={handleModalShow}
                            id="modal"
                            className="bg-white flex flex-col items-center justify-center w-48 my-5 rounded-3xl shadow-lg"
                        >
                            <div className="px-3 py-2">
                                <div id="img-modal">
                                    <img src={Hotel} />
                                </div>
                                <div id="title" className="flex flex-col">
                                    <div className="text-center text-indigo-950 font-semibold">
                                        <h1>Hotel</h1>
                                    </div>
                                    <div
                                        id="subtitle"
                                        className="bg-white mx-2.5 my-1 font-medium leading-relaxed text-gray-500 text-md"
                                        style={{
                                            fontFamily: "Poppins, sans-serif",
                                        }}
                                    >
                                        <p className="font-semibold">
                                            Madinah : AL Andalus Place 3 MAKKAH
                                            : Villa Hilton
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <Modal show={show}>
                        <div
                            id="white-background"
                            className={`w-[400px] bg-cover bg-no-repeat bg-center xs:w-auto py-3 shadow flex-col justify-center items-center flex`}
                            style={{ backgroundImage: `url(${bgWhite})` }}
                        >
                            <div
                                id="header"
                                className="flex flex-col items-center gap-y-3 mb-10"
                            >
                                <div id="img-menara" className="mt-3">
                                    <img src={Menara} width={220} />
                                </div>
                                <div id="img-sac">
                                    <img src={Logo} width={70} />
                                </div>
                                <div
                                    id="content-corousel"
                                    className="mx-1 bg-scroll overflow-x-scroll flex"
                                >
                                    {/* Fetch Data Here */}
                                    <img
                                        className="w-[1224px] h-[316px] sm:w-auto"
                                        src="https://via.placeholder.com/1224x316"
                                    />
                                    <img
                                        className="w-[1224px] h-[316px] sm:w-auto"
                                        src="https://via.placeholder.com/1224x316"
                                    />
                                    <img
                                        className="w-[1224px] h-[316px] sm:w-auto"
                                        src="https://via.placeholder.com/1224x316"
                                    />
                                    <img
                                        className="w-[1224px] h-[316px] sm:w-auto"
                                        src="https://via.placeholder.com/1224x316"
                                    />
                                    {/* End Fetch */}
                                </div>
                            </div>
                            <SecondaryButton onClick={handleModalShow}>
                                Kembali
                            </SecondaryButton>
                        </div>
                    </Modal>
                    <MottoTrippleComponent />
                </div>
            </motion.div>
        </>
    );
}

export default MottoComponent;
