import Dropdownv2 from "@/Components/Dropdownv2";
import FooterAdmin from "@/Components/FooterAdmin";
import { Link, usePage } from "@inertiajs/react";
import { motion } from "framer-motion";
import { FaDatabase } from "react-icons/fa6";

function Sidebar({ user, children, onDataClick }) {
    const role = "2";
    const { url } = usePage();
    const buttonVariants = {
        initial: {
            paddingTop: "0px",
            paddingBottom: "0px",
            borderRadius: "0px",
            margin: "1.25rem",
        },
        hover: {
            backgroundColor: "#C69749",
            borderRadius: "6px",
            paddingTop: "10px",
            paddingBottom: "10px",
        },
    };

    const isActive = (routeName) => {
        const urls = route(routeName);
        const page = window.location.href == urls;
        return page ? "bg-[#C69749] py-2.5 mx-5 rounded-lg" : "";
    };

    const dropActive = (routeName) => {
        const urls = route(routeName);
        const page = window.location.href == urls;
        return page ? "bg-[#C69749] hover:bg-[#C69749] text-white" : "";
    };

    return (
        <>
            <div className="flex min-h-full bg-[#FFFFFF]">
                <section id="sidebar" className="max-h-full bg-[#282A3A]">
                    <div className="w-56">
                        <div
                            id="name-user"
                            className="flex items-center justify-center bg-[#C69749] rounded-lg p-2 m-4"
                        >
                            <span className="font-semibold">
                                Log, in As Admin
                            </span>
                        </div>
                        <div className="text-center">
                            <hr />
                            <div className="flex items-center justify-center gap-x-3 my-2 bg-[#C69749] py-2 text-white">
                                <FaDatabase />
                                <span className="font-medium text-sm">
                                    Master Data
                                </span>
                                <FaDatabase />
                            </div>
                            <hr />
                        </div>
                        <div id="nav-link">
                            {/* Dashboard-link */}
                            <motion.div
                                variants={buttonVariants}
                                initial={`${
                                    isActive("dashboard") ? "" : "initial"
                                }`}
                                whileHover={`${
                                    isActive("dashboard") ? "" : "hover"
                                }`}
                                id="btn-1"
                                className={`text-white text-center text-md my-5 ${isActive(
                                    "dashboard"
                                )}`}
                            >
                                <Link href={route("dashboard")}>
                                    <span>Dashboard</span>
                                </Link>
                            </motion.div>
                            {/* Dashboard-link */}

                            {/* paket-link */}
                            <motion.div
                                variants={buttonVariants}
                                initial={`${
                                    isActive("paket.index") ? "" : "initial"
                                }`}
                                whileHover={`${
                                    isActive("paket.index") ? "" : "hover"
                                }`}
                                id="btn-2"
                                className={`text-white text-center text-md my-5 ${isActive(
                                    "paket.index"
                                )}`}
                            >
                                <Link href={route("paket.index")}>
                                    <span>Data Paket Umroh</span>
                                </Link>
                            </motion.div>
                            {/* [paket]-link */}

                            {/* Dropdown-link */}

                            <Dropdownv2
                                title="Data Motto & Foto Hotel"
                                props={`${
                                    isActive("motto-section.index") ||
                                    isActive("hotel.index")
                                        ? "true"
                                        : "false"
                                }`}
                            >
                                <Link href={route("motto-section.index")}>
                                    <div
                                        role="menuitem"
                                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${dropActive(
                                            "motto-section.index"
                                        )}`}
                                    >
                                        <span>Data Motto Umroh</span>
                                    </div>
                                </Link>
                                <Link href={route("hotel.index")}>
                                    <div
                                        id="btn-5"
                                        role="menuitem"
                                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${dropActive(
                                            "hotel.index"
                                        )}`}
                                    >
                                        <span>Data Foto Hotel</span>
                                    </div>
                                </Link>
                            </Dropdownv2>
                            {/* [Dropdown]-link */}

                            {/* Galerry-link */}
                            <motion.div
                                variants={buttonVariants}
                                initial={`${
                                    isActive("galery.index") ? "" : "initial"
                                }`}
                                whileHover={`${
                                    isActive("galery.index") ? "" : "hover"
                                }`}
                                id="btn-2"
                                className={`text-white text-center text-md my-5 ${isActive(
                                    "galery.index"
                                )}`}
                            >
                                <Link href={route("galery.index")}>
                                    <span>Data Galerry Umroh</span>
                                </Link>
                            </motion.div>
                            {/* [Galerry]-link */}

                            {/* Tips-link */}
                            <motion.div
                                variants={buttonVariants}
                                initial={`${
                                    isActive("tips.index") ? "" : "initial"
                                }`}
                                whileHover={`${
                                    isActive("tips.index") ? "" : "hover"
                                }`}
                                id="btn-2"
                                className={`text-white text-center text-md my-5 ${isActive(
                                    "tips.index"
                                )}`}
                            >
                                <Link href={route("tips.index")}>
                                    <span>Data Tips Umroh</span>
                                </Link>
                            </motion.div>
                            {/* [Tips]-link */}
                        </div>
                    </div>
                    <FooterAdmin />
                </section>
                <div className="m-10 bg-white shadow-md w-fit">{children}</div>
            </div>
        </>
    );
}

export default Sidebar;
