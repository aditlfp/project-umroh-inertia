import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import bgUmroh from "../../../img-local/umroh.jpg";
import Modal from "../Modal";

function ItemsPaket({ datas }) {
    console.log(datas);
    const [show, setShow] = useState(false);
    const refs = useRef(null);
    const [image, setImage] = useState();
    const [id, setId] = useState();
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    const data = {
        datas: [
            {
                id: "1",
            },
            {
                id: "2",
            },
        ],
    };
    // console.log(data.datas[0]);

    const handleClick = (id) => {
        if (data.datas.some((item) => item.id == id)) {
            const img = document.getElementById(`${id}`);
            const src = img.src;
            console.log(id, true);
            setImage(src);
            setId(id);
            setShow(!show);
        } else {
            console.log(false);
        }
    };

    const handleClickWa = () => {
        //
        // Change response Id to Message for WhatsApp
        //
        const phone_number = 6281334264357; // Phone Number Whatsapp
        window.open(
            `https://api.whatsapp.com/send/?phone=${phone_number}&text=${id}&type=phone_number&app_absent=0`,
            "_blank"
        );
    };

    return (
        <div className="flex" id="pilihan-paket">
            <Helmet>
                <link
                    href="https://fonts.cdnfonts.com/css/jano-sans-pro"
                    rel="stylesheet"
                />
            </Helmet>
            {/* Change This To Data Dynamic */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="box hover:cursor-pointer"
            >
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    transition={{ duration: 0.6 }}
                    className="mx-10 mb-10"
                    onClick={() => handleClick(data.datas[0].id)}
                >
                    <img
                        id="1"
                        className="w-[314px] h-[457px] shadow"
                        src="https://placehold.jp/314x457.png"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="box hover:cursor-pointer"
            >
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    transition={{ duration: 1.0 }}
                    className="mx-10 mb-10"
                    onClick={() => handleClick(data.datas[1].id)}
                >
                    <img
                        id="2"
                        className="w-[314px] h-[457px] shadow"
                        src="https://placehold.jp/3d4070/ffffff/314x457.png"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="box hover:cursor-pointer"
            >
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    transition={{ duration: 1.4 }}
                    className="mx-10 mb-10"
                >
                    <img
                        className="w-[314px] h-[457px] shadow"
                        src="https://placehold.jp/314x457.png"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="box hover:cursor-pointer"
            >
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    transition={{ duration: 1.8 }}
                    className="mx-10 mb-10"
                >
                    <img
                        className="w-[314px] h-[457px] shadow"
                        src="https://placehold.jp/314x457.png"
                    />
                </motion.div>
            </motion.div>
            {/* Change This To Data Dynamic */}

            {/* Modal Handle Click */}
            <Modal id={id} show={show}>
                <div
                    className="bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${bgUmroh})` }}
                >
                    <div className="flex items-center justify-center">
                        <button onClick={() => setShow(!show)}>
                            <IoCloseCircleOutline className="text-white text-2xl font-semibold my-2" />
                        </button>
                    </div>
                    <img srcSet={image} />
                    <div className="flex items-center justify-center">
                        <div
                            className="bg-green-700 flex px-5 rounded-md py-2 my-2 text-xl text-white gap-x-3 hover:cursor-pointer"
                            style={{ fontFamily: "Jano Sans Pro, sans-serif" }}
                            onClick={handleClickWa}
                        >
                            <button>
                                <RiWhatsappFill />
                            </button>
                            <span className="text-md font-medium">
                                Chat Admin
                            </span>
                        </div>
                    </div>
                </div>
            </Modal>
            {/* End Modal */}
        </div>
    );
}

export default ItemsPaket;
