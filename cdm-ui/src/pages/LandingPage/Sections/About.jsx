import React from "react";
import AboutCar from "../../../assets/images/LandingPage/about_car.jpg";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#222F33] relative ">
      <div className="flex ">
        <div className="w-[750px] bg-white flex flex-col m-0 max-lg:px-4 p-32">
          <h1 className="py-2 text-4xl font-bold max-lg:mt-12">About</h1>
          <p className="py-2 text-xl  text-[#646D70] min-w-[435px]">
            <div>
            We are a team of passionate 
            </div>
            <div>
            individuals who believe in the potential 
            </div>
            <div>
            of electric vehicles. Our mission is to  
            </div>
            <div>
            make electric cars accessible to  
            </div>
            <div>
            everyone, everywhere. We are  
            </div>
            <div>
            committed to providing the best 
            </div>
            <div>
            possible experience to our customers, 
            </div>
            <div>
            from the moment they place their  
            </div>
            <div>
            order to the day they receive their car.
            </div>
          </p>
          <button className="py-2 bg-black hover:bg-gray-500 rounded-full text-white hover:text-black font-medium w-[200px] my-6" onClick={()=>{navigate("/login")}}>
            Get Started
          </button>
        </div>
        <div className="bg-white flex-1 h-[300px]"></div>
      </div>

      <div className="py-20 mx-auto text-white  xl:px-[300px] px-[60px]">
        <h1 className="py-2 text-4xl font-bold ">Innovatie</h1>
        <div className="flex flex-row max-lg:flex-col">
          <p className="py-2 text-xl text-gray-400 ">
            At CDMA, our commitment is to consistently evolve and revolutionize
            the automotive landscape, with a vision of making our vehicles 100%
            environmentally friendly and sustainable. Our priority is to ensure
            that these eco-friendly cars remain accessible to all. Immerse
            yourself in a driving experience powered by the sun, the wind, and
            cutting-edge insulation technology.
          </p>
          <p className="py-2 text-xl text-gray-400 lg:ml-14 max-lg:mt-10">
            All our vehicles boast exceptional insulation properties, crafted
            with a blend of sustainable and natural materials wherever feasible.
            The distinctive aesthetic featuring sleek 'round corners' is
            achieved through meticulous material selection. We believe in the
            inherent advantages of constructing vehicles that align with our
            commitment to a greener future.
          </p>
        </div>
      </div>
      <img
        src={AboutCar}
        alt="car"
        className="absolute top-[-40px] right-[10%] w-[40%]  max-xl:w-[300px]"
      />
    </div>
  );
};

export default About;
