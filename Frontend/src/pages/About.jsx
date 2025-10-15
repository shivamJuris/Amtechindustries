import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* ABOUT US SECTION */}
      <div className="text-center text-2xl pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-16 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center gap-6 text-gray-700 dark:text-gray-300 md:w-1/2"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Welcome to amtech-industries Trends
          </h2>
          <p>
            At <b>amtech-industries Trends</b>, we believe fashion should be timeless,
            comfortable, and accessible to everyone. Based in{" "}
            <b>Vardhman Colony, Chandigarh Road, Ludhiana (Punjab)</b>, we take
            pride in offering quality garments and accessories that celebrate
            your individuality.
          </p>
          <p>
            Our goal is to create a brand that merges style with sustainability.
            We focus on quality fabrics, minimal waste production, and ethical
            sourcing — ensuring every piece you wear makes you feel good inside
            and out.
          </p>

          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            Our Mission
          </h3>
          <p>
            Our mission is to redefine everyday fashion through trust,
            creativity, and innovation — bringing comfort, confidence, and
            sustainability into every wardrobe.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.img
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          src={assets.about_img}
          alt="About Us"
          className="w-full md:max-w-[500px] rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* WHY CHOOSE US SECTION */}
      <div className="text-center text-xl py-8">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 mb-20 px-4">
        {[
          {
            title: "Quality You Can Trust",
            text: "Each product is crafted with attention to detail, ensuring durability, comfort, and long-lasting appeal.",
          },
          {
            title: "Seamless Experience",
            text: "We make your shopping journey effortless — from browsing collections to secure checkout and quick delivery.",
          },
          {
            title: "Dedicated Support",
            text: "Have a question? Our team is always here to help via phone, email, or social channels — ensuring you’re never left waiting.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg hover:-translate-y-2 transition-all duration-500 rounded-2xl px-8 py-10 flex flex-col gap-4 text-center"
          >
            <b className="text-lg text-gray-900 dark:text-gray-100">{item.title}</b>
            <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* CONTACT INFO SECTION (from footer) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-100 dark:bg-gray-800 rounded-2xl py-10 px-6 md:px-16 mb-20 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Our Office</h2>
        <p className="text-gray-600 dark:text-gray-300">
          <b>Amtech-Industries</b> <br />
         123 Innovation Drive, Tech City
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Phone: <b>+1 (234) 567-890</b> <br />
          Email: <b>contact@amtech-industries.com</b>
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Follow us on our social handles for updates and offers.
        </p>
      </motion.div>

      {/* NEWSLETTER SECTION */}
      <NewsletterBox />
    </div>
  );
};

export default About;
