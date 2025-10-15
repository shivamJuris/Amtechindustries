import React, { useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us anytime via our email contact@amtech.com or by calling +1 (234) 567-890.",
      open: false,
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, Amtech Industries provides shipping services to several countries worldwide.",
      open: false,
    },
    {
      question: "Where are you located?",
      answer:
        "We are located at 123 Innovation Drive, Tech City — serving clients globally.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs((prev) =>
      prev.map((faq, i) =>
        i === index ? { ...faq, open: !faq.open } : { ...faq, open: false }
      )
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">
      {/* Page Title */}
      <div className="text-center text-2xl border-t pt-10">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Row 1: Office Info + Form */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-5 md:px-10 lg:px-20 mt-16">
        {/* Office Info */}
        <motion.div
          className="flex-1 flex flex-col items-start gap-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-semibold text-2xl">Our Office</h2>
          <p className="text-gray-500 dark:text-gray-400">
            123 Innovation Drive, Tech City
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Tel: +1 (234) 567-890 <br /> Email: contact@amtech.com
          </p>

          <h3 className="font-semibold text-xl pt-6">Careers at Amtech</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Join our innovative team and explore exciting job opportunities.
          </p>
          <button className="border border-gray-800 dark:border-gray-200 rounded-lg px-8 py-3 mt-2 text-sm hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
            Explore Jobs
          </button>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="flex-1 w-full bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Get in Touch</h3>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-black dark:bg-white text-white dark:text-black rounded-md py-3 font-semibold transition-colors duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Row 2: Image + FAQ */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-5 md:px-10 lg:px-20 mt-24 mb-24">
        {/* Image */}
        <motion.img
          src={assets.contact_img}
          alt="Contact"
          className="flex-1 w-full md:max-w-[480px] rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* FAQ */}
        <motion.div
          className="flex-1 max-w-xl w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 font-medium bg-gray-50 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex justify-between items-center"
                >
                  {faq.question}
                  <span>{faq.open ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {faq.open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Newsletter */}
      <NewsletterBox />
    </div>
  );
};

export default Contact;
