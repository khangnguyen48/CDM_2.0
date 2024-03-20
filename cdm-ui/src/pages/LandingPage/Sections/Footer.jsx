import React from "react";

import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" pt-12">
      <div className="lg:px-[130px] px-[60px] max-sm:max-w-[500px]">
        <h1 className="text-[#192459] text-2xl font-medium after:block after:h-1 after:w-48 after:bg-[#E47F3A] after:mt-2">
          We are ready to support
        </h1>
        <div className="flex lg:flex-row max-lg:flex-col  mt-12 border-b border-b-gray-500 lg:pb-16 ">
          <div className="justify-start min-w-[170px]">
            <h2 className="text-[#192459] text-xl font-medium mb-4">
              Call us 1800 8192
            </h2>
            <p>For advice on car loans</p>
            <p>
              <span className="font-bold">Mon-Fri:</span> 8am-6pm, Sat: 8am-12pm
            </p>
          </div>
          <div className="justify-start min-w-[170px] lg:mx-56 max-lg:py-12">
            <h2 className="text-[#192459] text-xl font-medium mb-4">
              Location
            </h2>
            <p>Ho Chi Minh City</p>
            <p>District 1</p>
            <p>Alexandre De Rhodes Street, Ben Nghe Ward</p>
          </div>
          <img
            src="src\assets\images\LandingPage\dealership.jpg"
            alt="dealership"
            className="w-[30%] mt-[-56px] max-xl:hidden"
          />
        </div>
      </div>
      <div className="lg:px-[130px] px-[60px] text-black  grid lg:grid-cols-3 gap-8 mt-16">
        <div>
          <h1 className="text-3xl font-bold w-full mt-[-12px] text-amber-500">
            CDMA.
          </h1>
          <p className="py-6 max-w-[390px]">
            We are a team of passionate individuals who believe in the potential
            of electric vehicles. Our mission is to make electric cars
            accessible to everyone, everywhere. We are committed to providing
            the best possible experience to our customers, from the moment they
            place their order to the day they receive their vehicle.
          </p>
          <div className="flex justify-between my-6 md:w-[75%]">
            <FaFacebookSquare size={30} className="hover:cursor-pointer" />
            <FaInstagramSquare size={30} className="hover:cursor-pointer" />
            <FaGithubSquare size={30} className="hover:cursor-pointer" />
            <FaTwitterSquare size={30} className="hover:cursor-pointer" />
          </div>
        </div>
        <div className="lg:col-span-2  flex justify-between mt-8">
          <div>
            <h6 className="font-medium text-[#192459]">Solutions</h6>
            <ul>
              <li className="py-2 text-sm hover:cursor-pointer">Analytics</li>
              <li className="py-2 text-sm hover:cursor-pointer">Marketing</li>
              <li className="py-2 text-sm hover:cursor-pointer">Commerce</li>
              <li className="py-2 text-sm hover:cursor-pointer">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#192459]">Support</h6>
            <ul>
              <li className="py-2 text-sm hover:cursor-pointer">Pricing</li>
              <li className="py-2 text-sm hover:cursor-pointer">
                Documentation
              </li>
              <li className="py-2 text-sm hover:cursor-pointer">Guides</li>
              <li className="py-2 text-sm hover:cursor-pointer">API Status</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-[#192459]">Company</h6>
            <ul>
              <li className="py-2 text-sm hover:cursor-pointer">About</li>
              <li className="py-2 text-sm hover:cursor-pointer">Blog</li>
              <li className="py-2 text-sm hover:cursor-pointer">Jobs</li>
              <li className="py-2 text-sm hover:cursor-pointer">Press</li>
              <li className="py-2 text-sm hover:cursor-pointer">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#192459]">Legal</h6>
            <ul>
              <li className="py-2 text-sm hover:cursor-pointer">Claim</li>
              <li className="py-2 text-sm hover:cursor-pointer">Policy</li>
              <li className="py-2 text-sm hover:cursor-pointer">Terms</li>
            </ul>
          </div>
        </div>
      </div>
      <img
        src="src\assets\images\LandingPage\footer.png"
        alt="car"
        className="w-full "
      />
    </div>
  );
};

export default Footer;
