import Logo from '../assets/athletic-mma.png';
import IconName from '../assets/icon-name.webp';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Heropage = () => {
    const IconRef = useRef(null);
    const ImageRef = useRef(null);

    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const isIconInView = useInView(IconRef, { triggerOnce: true, threshold: 0.2 });
    const isImageInView = useInView(ImageRef, { triggerOnce: true, threshold: 0.2 });

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] sm:min-h-full">
            <motion.div 
                ref={IconRef}
                className="lg:px-20 pt-5 pb-5 lg:mt-[15%] ml-[12%] sm:ml-[12%] lg:ml-10"
                variants={fadeInVariants}
                initial="hidden"
                animate={isIconInView ? 'visible' : 'hidden'}
            >
                <motion.h1 
                    className="relative right-[1rem] text-3xl/[1rem]  font-bold tracking-tight mt-0 sm:mt-10 lg:mt-30 md:text-5xl/[3rem] xl:text-5xl/[3rem] 2xl:text-5xl/[1em] leading-[1.8rem]"
                    whileHover={{ scale: 1.1 }}
                >
                    <img src={IconName} alt="Icon name" className='h-13 w-[40vh] sm:w-[60vh] sm:h-20 lg:w-full lg:h-30' />
                </motion.h1>
                <motion.p 
                    className="relative right-[1.2rem] font-medium  ms-2 sm:text-2xl mt-4 sm:ml-2"
                    variants={fadeInVariants}
                    initial="hidden"
                    animate={isIconInView ? 'visible' : 'hidden'}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Achieve your fitness goals with our expert services.
                </motion.p>
                <motion.button 
                    onClick={(e) => handleSmoothScroll(e, 'About')}
                    className="relative right-[1.2rem] mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-400"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    variants={fadeInVariants}
                    initial="hidden"
                    animate={isIconInView ? 'visible' : 'hidden'}
                >
                    Get Started
                </motion.button>
            </motion.div>

            <motion.div 
                ref={ImageRef}
                className="flex justify-center items-center overflow-hidden"
                variants={fadeInVariants}
                initial="hidden"
                animate={isImageInView ? 'visible' : 'hidden'}
                transition={{ duration: 1.5 }}
            >
                <img src={Logo} alt="Athletic MMA gym Banner" className='w-full sm:h-[50vh] md:bg-transparent h-full lg:h-[90vh] lg:object-full' />
            </motion.div>
        </div>
    );
};

export default Heropage;
