import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/athletic-mma.png';

const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Card = ({ title, information, img, link }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { triggerOnce: true, threshold: 0.2 });
  
    return (
      <NavLink to={link}>
        <motion.div
          ref={cardRef}
          className="relative bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden w-full"
          variants={fadeInVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.1, rotate: 0.3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <motion.img className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={img} alt={title} />
          <div className="p-8 px-6">
            <h5 className="mb-3 text-3xl text-yellow-400 font-bold tracking-tight">{title}</h5>
            <p className="mb-5 text-lg font-normal">{information}</p>
          </div>
        </motion.div>
      </NavLink>
    );
  };

  
const Offers = () => {
    const groupRef = useRef(null);
    const personalRef = useRef(null);

    return (
        <div className="py-20 px-6 sm:min-h-screen">
            <motion.h1
                className="text-3xl font-bold text-center text-yellow-400 mb-10"
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
            >
                Our Available Offers
            </motion.h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
                <Card
                    title="Group Classes"
                    information="We offer many types of group training that involves self-defense and martial arts."
                    img={Logo}
                    link="/classes"
                    refProp={groupRef}
                />
                <Card
                    title="Personal Training"
                    information="We provide personal coaching focused on bodybuilding, weight gain, or weight loss."
                    img={Logo}
                    link="/training"
                    refProp={personalRef}
                />
            </div>
        </div>
    );
};

export default Offers;
