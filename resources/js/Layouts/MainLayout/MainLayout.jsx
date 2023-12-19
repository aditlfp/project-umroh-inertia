import Navbar from "@/Components/Navbar";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Poppins from "../../../font/Poppins-ExtraBold.ttf";
import Mekkah from "../../../img-local/bg-mekkah.png";
import FooterLayout from "../FooterLayout/FooterLayout";
import GalerryLayout from "../GalleryLayout/GalerryLayout";
import MottoLayout from "../MottoLayout/MottoLayout";
import PaketLayout from "../PaketLayout/PaketLayout";
import TipsLayout from "../TipsLayout/TipsLayout";

function MainLayout(
    dataHero,
    dataFoto,
    dataHotel,
    dataMoto,
    dataPaket,
    dataTips
) {
    // dataHero={hero}
    // dataFoto={foto}
    // dataHotel={hotel}
    // dataMoto={moto}
    // dataPaket={paket}
    // dataTips={tips}

    const [paket, setPaket] = useState();

    const styles = {
        fontWeight: "900",
    };
    const controls = useAnimation();

    useEffect(() => {
        // Trigger the animation when the component mounts
        controls.start({ opacity: 1 });
    }, [controls]);

    const handleRedirect = () => {
        // Replace 'https://example.com' with the desired URL
        // window.location.href = "https://baca-alquran.sac-po.com";
        window.open("https://baca-alquran.sac-po.com", "_blank");
    };

    const handleDataPush = () => {
        setPaket("pilihan-paket");
    };

    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 1.1 }}
            >
                <span id="tagline" className="flex justify-between">
                    <div>
                        <div
                            style={styles}
                            className={`text-red-400 text-xl font-${Poppins} uppercase mx-10 mt-10`}
                        >
                            Pt. surya amanah cendikia Ponorogo
                        </div>
                        {/* React Helmet */}
                        <Helmet>
                            <link
                                rel="stylesheet"
                                href="https://fonts.cdnfonts.com/css/jano-sans-pro"
                            />

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
                        {/* End React Helmet */}
                        <div
                            className="text-indigo-950 text-7xl font-bold mx-9 mt-10"
                            style={{ fontFamily: "Jano Sans Pro, sans-serif" }}
                        >
                            Umroh Berkah
                        </div>
                        <div
                            style={{ fontFamily: "Jano Sans Pro, sans-serif" }}
                            className="text-indigo-950 text-5xl font-bold mx-9 mt-1"
                        >
                            Bulan Ramadhan{" "}
                        </div>
                        <div
                            style={{ fontFamily: "Jano Sans Pro, sans-serif" }}
                            className=" text-indigo-950 text-8xl font-bold mx-9 mt-1"
                        >
                            2024
                        </div>

                        {/* SubTitle */}
                        <p
                            className="text-gray-500 text-base break-words font-medium ml-9"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            “Jarak Mekah tidak akan berubah kalau kita tidak
                            melangkah, Niat yang kuat Insya Allah berangkat.”
                        </p>
                        {/* End SubTitle */}

                        {/* Button */}
                        <div className="flex mx-9 mt-2 gap-5 py-2">
                            <button
                                onClick={() => handleDataPush()}
                                className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 focus:bg-amber-700 focus:ring-0 py-3 px-5 rounded-xl font-medium text-white transition ease-in-out duration-150"
                            >
                                Lihat Paket
                            </button>
                            <button
                                onClick={handleRedirect}
                                className="bg-green-800 hover:bg-green-900 active:bg-green-900 focus:bg-green-900 focus:ring-0 py-3 px-5 rounded-xl font-medium text-white transition ease-in-out duration-150"
                            >
                                Baca Alquran
                            </button>
                        </div>
                        {/* End Button */}
                    </div>
                    <div>
                        <img
                            width={500}
                            height={500}
                            srcSet={Mekkah}
                            className="absolute z-[99] left-[53rem]"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                        <svg
                            className="top-0 z-8 left-[55rem]"
                            width="704"
                            height="724"
                            viewBox="0 0 704 724"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22.3069 222C-18.0931 153.2 5.4736 13.3333 22.3069 -48L701.807 -149L766.307 122.5L727.807 723.5C649.14 724.5 473.707 717 401.307 679C310.807 631.5 351.807 555 276.807 515C201.807 475 244.807 369.5 218.807 329.5C192.807 289.5 72.8069 308 22.3069 222Z"
                                fill="#FFF1DA"
                            />
                        </svg>
                    </div>
                </span>
            </motion.div>
            <>
                {dataFoto || dataHotel || dataMoto || dataPaket || dataTips ? (
                    <>
                        <MottoLayout props={dataMoto} propsHotel={dataHotel} />
                        <PaketLayout dataPaket={dataPaket} props={dataPaket} />
                        <GalerryLayout props={dataFoto} />
                        <TipsLayout props={dataTips} />
                    </>
                ) : (
                    <>
                        <div role="status" className="max-w-sm animate-pulse">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </>
                )}

                <FooterLayout />
            </>
        </>
    );
}

export default MainLayout;
