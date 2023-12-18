import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RiArrowDropUpLine } from "react-icons/ri";

const Dropdownv2 = ({ title, children, props }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-right w-auto mx-5">
            <div>
                <button
                    onClick={toggleDropdown}
                    type="button"
                    className={`inline-flex justify-center w-full rounded-md px-6 py-2 text-sm text-white font-medium focus:outline-none hover:bg-[#C69749] transition-all ease-in-out duration-300 ${
                        props == "true"
                            ? "border-[#C69749] bg-[#C69749] focus:border-[#C69749]"
                            : ""
                    }`}
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                >
                    {title}
                    <div className="flex items-center">
                        {isOpen ? (
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 180 }}
                                transition={{ duration: 0.3 }}
                                className="text-4xl"
                            >
                                <RiArrowDropUpLine />
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 90 }}
                                transition={{ duration: 0.3 }}
                                className="text-4xl"
                            >
                                <RiArrowDropUpLine />
                            </motion.div>
                        )}
                    </div>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                        }}
                        className="origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <div className="py-1" role="none">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Dropdownv2;
