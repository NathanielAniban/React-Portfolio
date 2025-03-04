import React from "react";
import Logo from "../assets/athletic-mma.png";
import { motion } from "framer-motion";

const trainers = [
  { name: "Dave Wood", role: "Owner & Trainer", image: Logo, full:true },
  { name: "Catherine", role: "Trainer", image: Logo, full:true },
  { name: "Chris Simmons", role: "Trainer", image: Logo, full: true },
  { name: "Kyla Moore", role: "Trainer", image: Logo, full:true },
];

const TrainersGrid = () => {
  return (
    <div className="bg-gray-900 text-white sm:min-h-screen py-20 px-6">
      <div className="text-center mb-10">
        <h3 className="text-sm text-yellow-400 uppercase">Our Team</h3>
        <h2 className="text-3xl font-bold">
          Meet Our <span className="text-yellow-400">Trainers</span>
        </h2>
      </div>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {trainers.map((trainer, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={trainer.image}
              alt={trainer.name}
              className={`w-full size-90 transition-transform duration-500 ease-in-out ${
                trainer.full ? "" : "h-full object-cover"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.div 
              className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="text-center py-4">
              <h4 className="text-yellow-400 font-bold uppercase">{trainer.name}</h4>
              <p className="text-sm text-gray-300">{trainer.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TrainersGrid;
