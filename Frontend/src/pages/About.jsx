import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newsletter from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col gap-1 md:flex-row">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col hustify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            aspernatur quo possimus quaerat veniam. Mollitia, esse a. Minima,
            ratione! Similique iusto veritatis quos nam fugit perferendis. Hic
            totam ipsam suscipit.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            numquam incidunt, nesciunt labore fugiat omnis deserunt, facere
            quos, laudantium impedit doloremque neque pariatur ut et at
            distinctio iusto. Obcaecati, modi.
          </p>
          <b className="text-gray-800">OUR MISSION</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            ullam quos saepe sint, assumenda soluta eligendi ipsam nihil beatae
            ex accusamus deleniti quo. Quia, repellat. Porro eius a corporis
             alias placeat ratione, suscipit optio inventore perspiciatis
            incidunt consequuntur reiciendis in id asperiores non accusamus? A!
            unde!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>QUALITY ASSURANCE:</b>
               <p className="text-gray-600">
            We malicious Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptatem, impedit voluptates. Obcaecati molestiae mollitia
           
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>CONVENIENCE:</b>
          <p className="text-gray-600">
            We malicious Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptatem, impedit voluptates. Obcaecati molestiae mollitia
           
          </p>
        </div>
         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>EXCEPTIONAL COSTUMER SERVICE:</b>
              <p className="text-gray-600">
            We malicious Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptatem, impedit voluptates. Obcaecati molestiae mollitia
           
          </p>
        </div>

      </div>
      <Newsletter/>
    </div>
  );
};

export default About;
