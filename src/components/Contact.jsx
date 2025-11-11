import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Facebook, Send, CheckCircle } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_jagten4", 
        "template_kdpoqbs", 
        form,
        "ozeiyv_RA7pOv_XPS" 
      )
      .then(
        () => {
          setShowSuccess(true);
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setShowSuccess(false), 3000);
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Try again!");
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-400 mb-12 text-center"
      >
        Get In <span className="text-white">Touch</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-6"
        >
          <h3 className="text-2xl font-semibold mb-2 text-blue-300">
            Let’s Connect
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Feel free to reach out for collaborations or just a friendly hello 👋  
            I’m always open to discussing new ideas or opportunities.
          </p>

          <div className="flex items-center gap-3">
            <Mail className="text-blue-400" />
            <a
              href="mailto:nazmulhaqueopi@gmail.com"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              nazmulhaqueopi@gmail.com
            </a>
          </div>

          <div className="flex gap-5 mt-4">
            <a
              href="https://github.com/Opi-dev"
              target="_blank"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <Github size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/nazmul-haque-opi-0a7700237/"
              target="_blank"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <Linkedin size={26} />
            </a>
            <a
              href="https://www.facebook.com/nazmulhaque.opi"
              target="_blank"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <Facebook size={26} />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-700 hover:border-blue-400 transition-all duration-300"
        >
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-400 outline-none text-gray-200"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-400 outline-none text-gray-200"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-400 outline-none text-gray-200 resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={sending}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg flex justify-center items-center gap-2 transition"
          >
            {sending ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                ></motion.div>
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>

      {/* ✅ Success Popup Animation */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-800 rounded-2xl p-8 text-center shadow-lg border border-blue-500"
            >
              <CheckCircle className="text-green-400 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">
                Message Sent Successfully! 🎉
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
