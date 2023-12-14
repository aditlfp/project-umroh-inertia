import { Inertia } from "@inertiajs/inertia";
import { motion } from "framer-motion";
import { FaDatabase } from "react-icons/fa6";

function Sidebar({ user, children }) {
    const role = "2";
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

    const toRoute = () => {
        Inertia.visit(route("role.index").url());
    };

    return (
        <>
            <div className="flex min-h-screen bg-[#FFFFFF]">
                <section id="sidebar" className="max-h-screen bg-[#282A3A]">
                    <div className="w-56">
                        <div
                            id="name-user"
                            className="flex items-center justify-center bg-[#C69749] rounded-lg p-2 m-4"
                        >
                            <span className="font-semibold">
                                Log, in As {user.name}
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
                            {/* role-link */}
                            <motion.div
                                variants={buttonVariants}
                                initial="initial"
                                whileHover="hover"
                                id="btn-1"
                                className="text-white text-center text-md my-5"
                                onClick={toRoute}
                            >
                                <span>Role Data</span>
                            </motion.div>
                            {/* role-link */}
                        </div>
                    </div>
                </section>
                <div className="bg-white max-h-screen my-5">{children}</div>
            </div>
        </>
    );
}

export default Sidebar;
