import { motion } from "framer-motion";
const Card = ({ title, information, img }) => {
    return (
        <motion.div 
            className="w-[40vh] 2xl:h-[50vh] max-h-sm max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 0.3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <img className="w-full h-70 object-cover" src={img} alt="Blog" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {title}
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                    {information}
                </p>
                <motion.a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg 
                               hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 "
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </motion.a>
            </div>
        </motion.div>
    );
};

export default Card;