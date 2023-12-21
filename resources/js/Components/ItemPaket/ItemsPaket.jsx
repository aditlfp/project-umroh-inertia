import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import bgUmroh from "../../../img-local/umroh.jpg";
import noImg from "../../../img-local/no-image.jpg";
import Modal from "../Modal";
import { TbTrashXFilled } from "react-icons/tb";
import PaketEDit from "@/Pages/Admin/Paket/PaketEdit";
import PaketEdit from "@/Pages/Admin/Paket/PaketEdit";
import { router, usePage } from "@inertiajs/react";
import { toast } from "react-toastify";

function ItemsPaket({ datas, sendDataToParent, edit, delet, dataEdit }) {
    // console.log(datas, "item");
    const [show, setShow] = useState(false);
    const [showDel, setShowDel] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [datasEdit, setDatasEdit] = useState();
    const [dataDelete, setDataDelete] = useState();
    const [image, setImage] = useState();
    const [id, setId] = useState();
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    const page = usePage();
    console.log(page.props.auth.user);

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    const handleClick = async (data) => {
        const item = datas.data.find((item) => item.id == data.id);

        if (item) {
            const { img } = item;
            const response = await fetch(`/storage/images/${img}`);
            if (response.ok) {
                setImage("/storage/images/" + img);
            } else {
                setImage(noImg);
            }
            setId(id);
            setShow(!show);
        }
    };

    // useEffect(() => {
    //     sendDataToParent(imageLoading);
    // });

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

    function handleDelete(id) {
        const item = datas.data.find((item) => item.id === id);
        setShowDel(!showDel);
        setDataDelete(item);
    }
    const handleDeleted = async (e) => {
        e.preventDefault();
        try {
            router.delete(`paket/${dataDelete.id}`);
            toast.warn("Done");
            setShowDel(!showDel);
        } catch (error) {
            toast.error("Telah Terjadi Error");
            console.error(error);
        }
    };

    function handleEdit(id) {
        const item = datas.data.find((item) => item.id === id);
        setShowEdit(!showEdit);
        setDatasEdit(item);
    }
    const modalRef = useRef(null);
    const modalDel = useRef(null);

    const [imageExistsArray, setImageExistsArray] = useState([]);
    const [imageLoading, setImageLoading] = useState(true);

    useEffect(() => {
        const checkImageExists = async (imgPath) => {
            try {
                const response = await fetch(`/storage/images/${imgPath}`);
                return response.ok;
            } catch (error) {
                return false;
            }
        };

        if (datas.data) {
            const promises = datas.data.map((item) =>
                checkImageExists(item.img)
            );

            Promise.all(promises)
                .then((results) => {
                    setImageExistsArray(results);
                    setImageLoading(false);
                })
                .catch((error) => {
                    console.error("Error checking image existence:", error);
                });
        }
    }, [datas?.data]);

    return (
        <>
            <div className="grid grid-cols-4 gap-4" id="pilihan-paket">
                <Helmet>
                    <link
                        href="https://fonts.cdnfonts.com/css/jano-sans-pro"
                        rel="stylesheet"
                    />
                </Helmet>

                {datas.data.map((data, i) => (
                    <motion.span
                        key={i}
                        className="flex items-center mt-5"
                        whileHover={{ scale: 1.1 }}
                    >
                        {!imageLoading && (
                            <>
                                <motion.span
                                    className="flex border items-center"
                                    ref={ref}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={controls}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="flex items-center justify-center">
                                        <img
                                            src={
                                                imageExistsArray[i]
                                                    ? `/storage/images/${data.img}`
                                                    : noImg
                                            }
                                            alt="image"
                                            width={
                                                imageExistsArray[i] ? 270 : 170
                                            }
                                            className="shadow-md my-5 ml-5"
                                            onClick={() => handleClick(data)}
                                            onLoad={() =>
                                                setImageLoading(false)
                                            } // Set imageLoading to false when the image loads
                                        />
                                    </div>
                                    {page.props.auth.user && (
                                        <div className="flex flex-col gap-y-2">
                                            <motion.button
                                                whileHover={{
                                                    backgroundColor:
                                                        "rgb(203 213 225)",
                                                    cursor: "pointer",
                                                }}
                                                whileTap={{ scale: 0.5 }}
                                                className="bg-slate-100 bg-opacity-50 backdrop-filter backdrop-blur-lg  backdrop-saturate-150 shadow-sm p-2 rounded-full"
                                                onClick={() =>
                                                    handleDelete(data.id)
                                                }
                                                name="buttonEdit"
                                            >
                                                <TbTrashXFilled className="text-red-500 text-xl" />
                                            </motion.button>
                                            <motion.button
                                                whileHover={{
                                                    backgroundColor:
                                                        "rgb(203 213 225)",
                                                    cursor: "pointer",
                                                }}
                                                whileTap={{ scale: 0.5 }}
                                                className="bg-slate-100 bg-opacity-50 backdrop-filter backdrop-blur-lg  backdrop-saturate-150 shadow-sm p-2 rounded-full"
                                                onClick={() =>
                                                    handleEdit(data.id)
                                                }
                                                name="buttonDelete"
                                            >
                                                <FaRegEdit className="text-yellow-500 ml-0.5 text-xl" />
                                            </motion.button>
                                        </div>
                                    )}
                                </motion.span>
                            </>
                        )}
                    </motion.span>
                ))}
                {image && (
                    <Modal id={id} show={show}>
                        <div
                            className="bg-center bg-no-repeat bg-cover  flex flex-col justify-center items-center"
                            style={{ backgroundImage: `url(${bgUmroh})` }}
                        >
                            <div className="flex items-center justify-center">
                                <button onClick={() => setShow(!show)}>
                                    <IoCloseCircleOutline className="text-white text-2xl font-semibold my-2" />
                                </button>
                            </div>
                            <img
                                srcSet={image ? image : noImg}
                                width={314}
                                height={457}
                            />
                            <div className="flex items-center justify-center">
                                <div
                                    className="bg-green-700 flex px-5 rounded-md py-2 my-2 text-xl text-white gap-x-3 hover:cursor-pointer"
                                    style={{
                                        fontFamily: "Jano Sans Pro, sans-serif",
                                    }}
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
                                <PaketEdit
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
                                <p>Yakin ingin menghapus {dataDelete.name}?</p>
                                <div>
                                    <div className="flex justify-center items-center rounded-md ">
                                        <img
                                            src={`/storage/images/${dataDelete.img}`}
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
        </>
    );
}

export default ItemsPaket;
