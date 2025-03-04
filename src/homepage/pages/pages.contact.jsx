import { Phone, Mail, MapPin } from "lucide-react";
import jsonSocials from "../jsons/json.socials";
import { motion } from 'framer-motion';

const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Form = () => {
    return(
        <motion.div 
            className="container p-10" 
            initial="hidden" 
            animate="visible" 
            variants={fadeInVariants}
        >
            <h1 className="text-4xl font-semibold text-yellow-400 font-[Shafarik]">Contact us</h1>
            <div className="py-10">
                <div>
                    <label htmlFor="" className="block mb-2 text-sm font-medium">Your Email</label>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <Mail className="w-5 h-5 text-gray-800" />
                        </div>
                    <input type="text" id="input-group-1" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" 
                    placeholder="example@email.com"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="" className="block mb-2 text-sm font-medium">Your Message</label>
                    <textarea type="text" id="input-group-1" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 h-40 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                    placeholder="Your Message"/>
                </div>
                <div>
                    <button className="block mb-2 text-sm font-medium bg-blue-700 hover:bg-blue-800 active:bg-blue-900 cursor-pointer px-5 py-2 my-5 rounded-xl">Send Message</button>
                </div>
            </div>
        </motion.div>
    );
};

const ContactDetails = () => {
    return(
        <motion.div 
            className="container p-10"
            initial="hidden" 
            animate="visible" 
            variants={fadeInVariants}
        >
        <h1 className="text-4xl font-semibold text-yellow-400 font-[Shafarik]">
          Contact Details
        </h1>
        <div className="py-12 space-y-4">
          {/* Phone */}
          <div className="flex items-center space-x-3">
            <Phone className="w-6 h-6" />
            <p className="text-sm font-medium ">+63 915-677-0853</p>
          </div>
  
          {/* Email */}
          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6" />
            <p className="text-sm font-medium">
              athleticmma@athleticmma.online
            </p>
          </div>
  
          {/* Address */}
          <div className="flex items-start space-x-3">
            <MapPin className="w-6 h-6  mt-1" />
            <p className="text-sm font-medium">
              Bik 33 Philippines Street Bagong Pag-Asa,<br />
              Barangay Santa Ana Taytay Rizal,<br />
              Barkadahan Bridge, Taytay, Philippines, 1920
            </p>
          </div>
        </div>
        <div className="space-y-4">
            <p className="text-lg font-medium">Socials</p>
            <div className="flex space-x-2">
                {
                    jsonSocials.Socials.map((path, index) => (
                        <a
                          key={index}
                          href={path.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center space-x-1 
                          ${path.cssStyle}
                          px-3 py-2 rounded-xl`}
                        >
                          <path.icon className="w-6 h-6 " />
                          <p className="text-lg font-medium ">{path.name}</p>
                        </a>
                      ))
                }
            </div>
        </div>
      </motion.div>
    );
}

const ContactForm = () => {
    return(
    <div className="py-20 sm:min-h-screen">
        <div className="container ms-auto">
            <div className="grid sm:grid-cols-2 gap-10">
                <Form/>
                <ContactDetails/>
            </div>
        </div>
    </div>
    );
}
export default ContactForm;
