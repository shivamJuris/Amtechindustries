import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl border-t pt-10">
        <Title text1={'CONTACT'} text2={'US'}/>
        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
          <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
          <div className="justify-center flex flex-col items-center gap-6">
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>Vardhman colony <br /> Chandigarh road Ludhiana, Punjab, INDIA </p>
            <p className='text-gray-500'>Tel: 7973164296 <br />EMAIL: shivamkumar10813@gmail.com</p>
            <p className='font-semibold text-xl text-gray-600'>Career's at FOREVER.</p>
            <p className='text-gray-500'>Vardhman colony <br /> Learn more about our team and job openings.</p>
            <button className='border border-black rounded-lg px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
          </div>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
}

export default Contact;
