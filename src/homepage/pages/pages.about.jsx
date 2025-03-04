import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import jsonAbout from '../jsons/json.about';

const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const About = () => {
    const missionRef = useRef(null);
    const historyRef = useRef(null);
    const imageRef = useRef(null);

    const missionInView = useInView(missionRef, { triggerOnce: true, threshold: 0.2 });
    const historyInView = useInView(historyRef, { triggerOnce: true, threshold: 0.2 });
    const imageInView = useInView(imageRef, { triggerOnce: true, threshold: 0.2 });

    return (
        <main className="py-20 sm:min-h-screen" id="About">
            <div className="container mx-auto px-4 ">
                <motion.section
                    id="mission"
                    className="px-3"
                    ref={missionRef}
                    initial="hidden"
                    animate={missionInView ? 'visible' : 'hidden'}
                    variants={fadeInVariants}
                >
                    <h1 className="text-4xl font-bold mb-4 font-[Shafarik] text-yellow-400">{jsonAbout.About[0].title}</h1>
                    <p className="break-words text-md sm:text-lg font-semibold">
                       {jsonAbout.About[0].information}
                    </p>
                </motion.section>

                <section className="mt-4">
                    <section id="history" ref={historyRef}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <motion.div
                                ref={imageRef}
                                initial="hidden"
                                animate={imageInView ? 'visible' : 'hidden'}
                                variants={fadeInVariants}
                            >
                                <img
                                    src="https://athleticmma.online/public/Images/gal6.jpg"
                                    className="rounded mt-4 w-full h-auto max-h-[400px] object-cover"
                                    alt="Gym History"
                                />
                            </motion.div>

                            <motion.div
                                className="mt-4 lg:mt-4"
                                initial="hidden"
                                animate={historyInView ? 'visible' : 'hidden'}
                                variants={fadeInVariants}
                            >
                                <h2 className="text-2xl font-semibold mb-2 font-[Shafarik] text-yellow-400">
                                {jsonAbout.About[1].title}
                                </h2>
                                <p className="break-words font-semibold mb-4">
                                {jsonAbout.About[1].information}
                                </p>
                                <h2 className="text-2xl font-semibold mb-2 font-[Shafarik] text-yellow-400">
                                {jsonAbout.About[2].title}
                                </h2>
                                <p className="break-words font-semibold mb-4">
                                {jsonAbout.About[2].information}
                                </p>
                                <h2 className="text-2xl font-semibold mb-2 font-[Shafarik] text-yellow-400">
                                {jsonAbout.About[3].title}
                                </h2>
                                <p className="break-words font-semibold">
                                {jsonAbout.About[3].information}
                                </p>
                            </motion.div>
                        </div>
                    </section>
                </section>
            </div>
        </main>
    );
};

export default About;
