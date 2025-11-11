import React from "react";
import { motion } from "framer-motion";
import whatsappLogo from "../assets/whatsapp.png"; // তোমার assets ফোল্ডারে রাখো

const WhatsAppButton = () => {
  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50 flex flex-col items-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 8 }}
    >
      {/* Button + Tooltip */}
      <motion.a
        href="https://wa.me/8801719750945" // তোমার WhatsApp নাম্বার
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center group"
      >
        {/* ✅ Speech Bubble Tooltip */}
        <motion.div
          className="absolute right-16 bg-[#25D366] text-white text-base font-semibold px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-[-8px] transition-all duration-300 whitespace-nowrap"
        >
          Chat with us!
          {/* Bubble Arrow */}
          <div
            className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 
                       border-t-[8px] border-t-transparent 
                       border-b-[8px] border-b-transparent 
                       border-l-[10px] border-l-[#25D366]"
          ></div>
        </motion.div>

        {/* Glowing Ring Animation */}
        <motion.span
          className="absolute w-12 h-12 rounded-full border-2 border-green-400 opacity-60"
          animate={{
            scale: [1, 1.5],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        ></motion.span>

        {/* Floating WhatsApp Icon */}
        <motion.div
          animate={{
            y: [0, -3, 0],
            boxShadow: [
              "0 0 0px rgba(37,211,102,0.3)",
              "0 0 20px rgba(37,211,102,0.6)",
              "0 0 0px rgba(37,211,102,0.3)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-[#25D366] p-2.5 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
        >
          <img
            src={whatsappLogo}
            alt="WhatsApp"
            className="w-8 h-8 rounded-full object-contain"
          />
        </motion.div>
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton;
