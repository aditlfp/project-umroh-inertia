import { motion } from "framer-motion";

function ItemTips() {
    return (
        <div className="grid grid-cols-4 gap-5">
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="box mx-3 shadow-md"
            >
                <img srcSet="https://via.placeholder.com/408x246" />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="box mx-3 shadow-md"
            >
                <img srcSet="https://via.placeholder.com/408x246" />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="box mx-3 shadow-md"
            >
                <img srcSet="https://via.placeholder.com/408x246" />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="box mx-3 shadow-md"
            >
                <img srcSet="https://via.placeholder.com/408x246" />
            </motion.div>
        </div>
    );
}

export default ItemTips;
