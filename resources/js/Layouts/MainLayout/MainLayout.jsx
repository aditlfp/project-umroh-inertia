import Navbar from "@/Components/Navbar";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Poppins from "../../../font/Poppins-ExtraBold.ttf";
import Mekkah from "../../../img-local/bg-mekkah.png";
import FooterLayout from "../FooterLayout/FooterLayout";
import GalerryLayout from "../GalleryLayout/GalerryLayout";
import MottoLayout from "../MottoLayout/MottoLayout";
import PaketLayout from "../PaketLayout/PaketLayout";
import TipsLayout from "../TipsLayout/TipsLayout";
import { FaRegEdit } from "react-icons/fa";
import { router, useForm, usePage } from "@inertiajs/react";

function MainLayout({
    dataHero,
    dataFoto,
    dataHotel,
    dataMoto,
    dataPaket,
    dataTips,
}) {
    // dataHero={hero}
    // dataFoto={foto}
    // dataHotel={hotel}
    // dataMoto={moto}
    // dataPaket={paket}
    // dataTips={tips}

    // console.log(dataPaket);
    const { props } = usePage();
    const heroData = props.hero;
    // console.log(heroData);

    const { data, setData, post, processing, errors, reset } = useForm({
        title:
            heroData.data.length == 0 ? "Umroh Berkah" : heroData.data[0].title,
        month:
            heroData.data.length == 0
                ? "Bulan Ramadhan"
                : heroData.data[0].month,
        year: heroData.data.length == 0 ? "2024" : heroData.data[0].year,
        sub_title:
            heroData.data.length == 0
                ? "Jarak Mekah tidak akan berubah kalau kita tidak melangkah, Niat yang kuat Insya Allah berangkat."
                : heroData.data[0].sub_title,
        img: heroData.data.length == 0 ? "" : heroData.data[0].img,
        oldimage: heroData.data.length == 0 ? "" : heroData.data[0].img,
    });

    // if (heroData.data.length >= 1) {
    //     console.log(true);
    // } else {
    //     console.log(false);
    // }

    const [hero, setHero] = useState(false);

    function handleHeroOpen() {
        setHero(true);
    }

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

    const submit = (e) => {
        e.preventDefault();

        if (heroData.data.length == 0) {
            post(route("hero-section.store"), {
                onSuccess: () => setData(!hero),
            });
        } else {
            router.post(`admin/hero-section/${heroData.data[0].id}`, {
                _method: "patch",
                title: data.title,
                month: data.month,
                year: data.year,
                sub_title: data.sub_title,
                img: data.img,
                oldimage: data.oldimage,
            });
        }
    };

    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 1.1 }}
            >
                {hero ? (
                    <form onSubmit={submit} encType="multipart/form-data">
                        <span id="tagline" className="flex justify-between">
                            <div className="mb-5">
                                <div
                                    style={styles}
                                    className={`text-red-400 text-base sm:text-xl font-${Poppins} uppercase mx-10 mt-10`}
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
                                    className="text-indigo-950 text-4xl sm:text-7xl font-bold mx-9 mt-10 flex"
                                    style={{
                                        fontFamily: "Jano Sans Pro, sans-serif",
                                    }}
                                >
                                    <div style={{ display: "inline-block" }}>
                                        <input
                                            type="text"
                                            id="title"
                                            name="title"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                            className="border-none bg-slate-300 focus:border-none outline-none text-4xl sm:text-7xl"
                                            style={{
                                                border: "none !important",
                                                boxShadow: "none",
                                                outline: "none",
                                                width: "auto",
                                                minWidth: "0",
                                                maxWidth: "55%", // Remove maximum width restriction
                                                display: "inline-block", // Ensure the input behaves as an inline block
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        fontFamily: "Jano Sans Pro, sans-serif",
                                    }}
                                    className="text-indigo-950 text-3xl sm:text-5xl font-bold mx-9 mt-1"
                                >
                                    <div style={{ display: "inline-block" }}>
                                        <input
                                            type="text"
                                            id="month"
                                            name="month"
                                            value={data.month}
                                            onChange={(e) =>
                                                setData("month", e.target.value)
                                            }
                                            className="border-none bg-slate-300 focus:border-none outline-none text-3xl sm:text-5xl"
                                            style={{
                                                border: "none !important",
                                                boxShadow: "none",
                                                outline: "none",
                                                width: "auto",
                                                minWidth: "0",
                                                maxWidth: "70%", // Remove maximum width restriction
                                                display: "inline-block", // Ensure the input behaves as an inline block
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        fontFamily: "Jano Sans Pro, sans-serif",
                                    }}
                                    className=" text-indigo-950 text-5xl sm:text-8xl font-bold mx-9 mt-1"
                                >
                                    <div style={{ display: "inline-block" }}>
                                        <input
                                            type="text"
                                            id="year"
                                            name="year"
                                            value={data.year}
                                            onChange={(e) =>
                                                setData("year", e.target.value)
                                            }
                                            className="border-none bg-slate-300 focus:border-none outline-none text-5xl sm:text-8xl"
                                            style={{
                                                border: "none !important",
                                                boxShadow: "none",
                                                outline: "none",
                                                width: "auto",
                                                minWidth: "0",
                                                maxWidth: "20%", // Remove maximum width restriction
                                                display: "inline-block", // Ensure the input behaves as an inline block
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="sm:hidden flex justify-center items-center">
                                    <img
                                        width={200}
                                        height={200}
                                        srcSet={
                                            typeof data.img === "string"
                                                ? `storage/images/${data.img}` // If data.img is a string, use it as the image source
                                                : !data.img
                                                ? Mekkah
                                                : URL.createObjectURL(data.img)
                                        }
                                        alt="mekkah"
                                        className="absolute z-[99] "
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                        }}
                                    />
                                    <svg
                                        viewBox="0 0 200 200"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={300}
                                        height={300}
                                        className="z-8"
                                    >
                                        <path
                                            fill="#FFF1DA"
                                            d="M70.4,-30.8C84.7,-15.8,85.4,17,71.4,41.3C57.4,65.6,28.7,81.5,5.2,78.5C-18.4,75.5,-36.8,53.7,-43.3,33.7C-49.7,13.8,-44.2,-4.3,-35,-16.3C-25.8,-28.3,-12.9,-34.2,7.5,-38.6C28,-43,56,-45.7,70.4,-30.8Z"
                                            transform="translate(100 100)"
                                        />
                                    </svg>
                                </div>

                                {/* SubTitle */}
                                <div
                                    className="text-gray-500 text-sm sm:text-base break-words font-medium ml-9"
                                    style={{
                                        fontFamily: "Poppins, sans-serif",
                                    }}
                                >
                                    <div style={{ display: "inline-block" }}>
                                        <textarea
                                            id="sub_title"
                                            name="sub_title"
                                            value={data.sub_title}
                                            onChange={(e) =>
                                                setData(
                                                    "sub_title",
                                                    e.target.value
                                                )
                                            }
                                            className="border-none bg-slate-300 focus:border-none outline-none text-sm sm:text-base"
                                            style={{
                                                border: "none !important",
                                                boxShadow: "none",
                                                outline: "none",
                                                width: "45rem", // Adjust the width as needed
                                                minWidth: "0",
                                                resize: "vertical", // Allow vertical resizing of the textarea
                                            }}
                                        />
                                    </div>
                                </div>
                                {/* End SubTitle */}

                                {/* Button */}
                                <div className="flex justify-center sm:justify-start mx-9 mt-2 gap-5 py-2 text-sm sm:text-base">
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
                            <div className="hidden sm:flex bg-slate-300">
                                <label htmlFor="img">
                                    <input
                                        type="file"
                                        id="img"
                                        accept="image/png"
                                        onChange={(e) =>
                                            setData("img", e.target.files[0])
                                        }
                                        className="hidden"
                                    />
                                    <img
                                        width={500}
                                        height={500}
                                        srcSet={
                                            typeof data.img === "string"
                                                ? `storage/images/${data.img}` // If data.img is a string, use it as the image source
                                                : !data.img
                                                ? Mekkah
                                                : URL.createObjectURL(data.img)
                                        }
                                        alt="mekkah"
                                        className="absolute z-[99] left-[53rem]"
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </label>
                                <svg
                                    className="top-0 z-8 right-0 absolute"
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
                        <div className="flex justify-center gap-4 mb-5">
                            <button
                                type="button"
                                onClick={() => setHero(!hero)}
                                className="py-2 px-4 rounded-md bg-red-500 text-white font-semibold"
                            >
                                Kembali
                            </button>
                            <button
                                type="submit"
                                className="py-2 px-4 rounded-md bg-[#C69749] text-white font-semibold"
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                ) : (
                    <span id="tagline" className="flex justify-between">
                        <div className="mb-5">
                            <div
                                style={styles}
                                className={`text-red-400 text-base sm:text-xl font-${Poppins} uppercase mx-10 mt-10`}
                            >
                                <p>Pt. surya amanah cendikia Ponorogo</p>
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
                                className="text-indigo-950 text-4xl sm:text-7xl font-bold mx-9 mt-10 flex"
                                style={{
                                    fontFamily: "Jano Sans Pro, sans-serif",
                                }}
                            >
                                {data.title ? (
                                    <p>{data.title}</p>
                                ) : (
                                    <p>Umroh Berkah</p>
                                )}
                                {!hero && props?.auth?.user?.role_id == 2 && (
                                    <motion.button
                                        whileHover={{
                                            backgroundColor: "rgb(203 213 225)",
                                            cursor: "pointer",
                                        }}
                                        whileTap={{ scale: 0.5 }}
                                        className="bg-slate-100 bg-opacity-50 backdrop-filter backdrop-blur-lg  backdrop-saturate-150 shadow-sm p-2 rounded-full"
                                        onClick={() => handleHeroOpen()}
                                        name="buttonEdit"
                                    >
                                        <FaRegEdit className="text-yellow-500 ml-0.5 text-xl sm:text-4xl" />
                                    </motion.button>
                                )}
                            </div>
                            <div
                                style={{
                                    fontFamily: "Jano Sans Pro, sans-serif",
                                }}
                                className="text-indigo-950 text-3xl sm:text-5xl font-bold mx-9 mt-1"
                            >
                                {data.month ? (
                                    <p>{data.month}</p>
                                ) : (
                                    <p>Bulan Ramadhan </p>
                                )}
                            </div>
                            <div
                                style={{
                                    fontFamily: "Jano Sans Pro, sans-serif",
                                }}
                                className=" text-indigo-950 text-5xl sm:text-8xl font-bold mx-9 mt-1"
                            >
                                {data.year}
                            </div>

                            <div className="sm:hidden flex justify-center items-center">
                                <img
                                    width={200}
                                    height={200}
                                    srcSet={
                                        data.img != Mekkah
                                            ? `storage/images/${data.img}`
                                            : Mekkah
                                    }
                                    alt="mekkah"
                                    className="absolute z-[99] "
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />
                                <svg
                                    viewBox="0 0 200 200"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={300}
                                    height={300}
                                    className="z-8"
                                >
                                    <path
                                        fill="#FFF1DA"
                                        d="M70.4,-30.8C84.7,-15.8,85.4,17,71.4,41.3C57.4,65.6,28.7,81.5,5.2,78.5C-18.4,75.5,-36.8,53.7,-43.3,33.7C-49.7,13.8,-44.2,-4.3,-35,-16.3C-25.8,-28.3,-12.9,-34.2,7.5,-38.6C28,-43,56,-45.7,70.4,-30.8Z"
                                        transform="translate(100 100)"
                                    />
                                </svg>
                            </div>

                            {/* SubTitle */}
                            <p
                                className="text-gray-500 text-sm sm:text-base break-words font-medium ml-9"
                                style={{ fontFamily: "Poppins, sans-serif" }}
                            >
                                “{data.sub_title}”
                            </p>
                            {/* End SubTitle */}

                            {/* Button */}
                            <div className="flex justify-center sm:justify-start mx-9 mt-2 gap-5 py-2 text-sm sm:text-base">
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
                        <div className="hidden sm:flex">
                            <img
                                width={500}
                                height={500}
                                srcSet={
                                    data.img != Mekkah
                                        ? `storage/images/${data.img}`
                                        : Mekkah
                                }
                                alt="mekkah"
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
                )}
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
